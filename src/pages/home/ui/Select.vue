<template>
  <select class="select" @change="$emit('changeSelect', selected)" v-model="selected">
    <option disabled value="">Выберите один из вариантов</option>
    <option v-for="item in sortedItems" :key="item.id" :value="item">
      {{ item.name }}
    </option>
  </select>
</template>

<script setup>
import { computed, ref } from "vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  keyId: {
    type: String,
    required: false,
  },
  linkedId: {
    type: Number,
    required: false,
  },
});

const selected = ref({});

const sortedItems = computed(() => {
  return props.items.filter((item) => item[props.keyId] === props.linkedId);
});
</script>

<style lang="scss" scoped>
.select {
  font-size: 20px;
  border-radius: 5px;           
  padding: 10px 5px;  
  width: 100%;          
}
</style>
