import { defineStore } from "pinia";

const STORE_NAME = "root";

export const useRootStore = defineStore(STORE_NAME, {
  state: () => ({
    result: {
      city: {},
      department: {},
      employee: {},
      brigade: {},
      workShift: {},
    },
    cities: [
      { id: 1, name: "Москва" },
      { id: 2, name: "Санкт-Петербург" },
      { id: 3, name: "Мурманск" },
      { id: 4, name: "Владивосток" },
    ], //города
    departments: [
      { id: 1, name: "Московский Цех 1", cityId: 1 },
      { id: 2, name: "Московский Цех 2", cityId: 1 },
      { id: 3, name: "Московский Цех 3", cityId: 1 },
      { id: 4, name: "СПБ Цех 1", cityId: 2 },
      { id: 5, name: "СПБ Цех 2", cityId: 2 },
      { id: 6, name: "Мурманск Цех 1", cityId: 3 },
      { id: 7, name: "Владивосток Цех 1", cityId: 4 },
    ], //цеха
    employees: [
      { id: 1, name: "Смирнов Вячеслав", departmentId: 1 },
      { id: 2, name: "Федотова Амина", departmentId: 1 },
      { id: 3, name: "Куликов Виктор", departmentId: 2 },
      { id: 4, name: "Новикова Ксения", departmentId: 2 },
      { id: 5, name: "Хромова Мария", departmentId: 2 },
      { id: 6, name: "Голубева Виктория", departmentId: 3 },
      { id: 7, name: "Котова Алина", departmentId: 4 },
      { id: 8, name: "Захарова Екатерина", departmentId: 5 },
      { id: 9, name: "Куликова Александра", departmentId: 5 },
      { id: 10, name: "Павлова Василиса", departmentId: 5 },
      { id: 11, name: "Максимов Лука", departmentId: 6 },
      { id: 12, name: "Виноградов Демид", departmentId: 7 },
      { id: 13, name: "Блинов Фёдор", departmentId: 7 },
      { id: 14, name: "Ларионова Алёна", departmentId: 7 },
    ], //сотрудники
    brigades: [
      { id: 1, name: "Бригада 1" },
      { id: 2, name: "Бригада 2" },
      { id: 3, name: "Бригада 3" },
      { id: 4, name: "Бригада 4" },
      { id: 5, name: "Бригада 5" },
    ], //бригады
    workShifts: [
      { id: 1, name: "Утро" },
      { id: 2, name: "Вечер" },
      { id: 3, name: "Ночь" },
    ], //смены
  }),
  actions: {
    setResult(result){
        this.result = result;
        localStorage.setItem(STORE_NAME, JSON.stringify(this.result));   
    },
  }
});
