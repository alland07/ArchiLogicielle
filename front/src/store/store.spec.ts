import { createPinia, setActivePinia } from 'pinia';
import { CounterStore, useCounterStore } from "./counterStore";

const pinia = createPinia();
setActivePinia(pinia);
const store: CounterStore = useCounterStore();

describe("Store", () => {
  beforeEach(() => {
    store.count = 0;
  });

  it('should return state', () => {
    expect(store.count).toBe(0);
  });
  it("should increment count", () => {
    store.increment(5);
    expect(store.count).toBe(5);
  });
});
