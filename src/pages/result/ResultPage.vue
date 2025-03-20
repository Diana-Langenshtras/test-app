<template>
  <section class="section">
    <h1 class="section__title">Результат</h1>
    <div class="info">
      <span><strong>Город:</strong> {{ result.city.name }}</span>
      <span><strong>Цех:</strong> {{ result.department.name }}</span>
      <span><strong>Сотрудник:</strong> {{ result.employee.name }}</span>
      <span><strong>Бригада:</strong> {{ result.brigade.name }}</span>
      <span><strong>Смена:</strong> {{ result.workShift.name }}</span>
    </div>
  </section>
</template>

<script setup>
import { useRootStore } from "../../app/providers/store/pinia";
const rootStore = useRootStore();

const result = rootStore.result;
</script>

<style lang="css" scoped>
.info {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  font-size: 28px;
  border: 1px solid #646cff;
  border-radius: 8px;
  padding: 30px 20px;
}
</style>
