import { defineStore } from "pinia";

export const useCounterStore = defineStore("CounterStore", {
  state: () => {
    return {
      count: 0,
    };
  },
  actions: {
    increment(value: number) {
      this.count += value;
    },
  },
});

export type CounterStore = ReturnType<typeof useCounterStore>;
