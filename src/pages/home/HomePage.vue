<template>
  <section class="section">
    <h1 class="section__title">Заполните форму</h1>
    <div class="select">
      <span class="select__title">Город</span>
      <Select @changeSelect="(item) => (city = item)" :items="cities" />
    </div>
    <div class="select">
      <span class="select__title">Цех</span>
      <Select
        :keyId="'cityId'"
        :linkedId="city ? city.id : null"
        @changeSelect="(item) => (department = item)"
        :items="departments"
        :disabled="!city"
      />
    </div>
    <div class="select">
      <span class="select__title">Сотрудник</span>
      <Select
        :keyId="'departmentId'"
        :linkedId="department ? department.id : null"
        @changeSelect="(item) => (employee = item)"
        :items="employees"
        :disabled="!department"
      />
    </div>
    <div class="select">
      <span class="select__title">Бригада</span>
      <Select @changeSelect="(item) => (brigade = item)" :items="brigades" />
    </div>
    <div class="select">
      <span class="select__title">Смена</span>
      <Select
        @changeSelect="(item) => (workShift = item)"
        :items="workShifts"
      />
    </div>
    <button
      class="section__button"
      :disabled="!isAllFormsSelect"
      @click="goToResult()"
    >
      К результату
    </button>
  </section>
</template>

<script lang="ts" setup>
import Select from "./ui/Select.vue";
import { useRootStore } from "../../app/providers/store/pinia";
import { computed, ref, watch } from "vue";
import { City } from "../../entities/City";
import { Department } from "../../entities/Department";
import { Employee } from "../../entities/Employee";
import { Brigade } from "../../entities/Brigade";
import { WorkShift } from "../../entities/WorkShift";
import { useRouter } from "vue-router";

const rootStore = useRootStore();
const router = useRouter();

const city = ref<City>();
const department = ref<Department>();
const employee = ref<Employee>();
const brigade = ref<Brigade>();
const workShift = ref<WorkShift>();

const cities = rootStore.cities;
const departments = rootStore.departments;
const employees = rootStore.employees;
const brigades = rootStore.brigades;
const workShifts = rootStore.workShifts;

const isAllFormsSelect = computed(() => {
  if (
    city.value &&
    department.value &&
    employee.value &&
    brigade.value &&
    workShift.value
  )
    return true;
  else return false;
});

const clear = () => {
  city.value = null;
  department.value = null;
  employee.value = null;
  brigade.value = null;
  workShift.value = null;
};

const goToResult = () => {
  if (
    city.value &&
    department.value &&
    employee.value &&
    brigade.value &&
    workShift.value
  ) {
    const result = {
      city: city.value,
      department: department.value,
      employee: employee.value,
      brigade: brigade.value,
      workShift: workShift.value,
    };
    rootStore.setResult(result);
    router.push({ name: "result" });
    clear();
  }
};

watch(
  () => city.value,
  () => {
    department.value = null;
    employee.value = null;
  }
);

watch(
  () => department.value,
  () => {
    employee.value = null;
  }
);
</script>

<style lang="css" scoped>
.select {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
}

.select__title {
  font-size: 28px;
}
</style>
