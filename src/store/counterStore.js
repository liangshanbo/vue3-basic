import { defineStore } from 'pinia';

const useCounterStore = defineStore('counterStore', {
    state: () => ({
        count: 0
    }),
    actions: {
        add() {
            this.count++;
        }
    }
})

export default useCounterStore;