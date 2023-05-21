import { ref } from 'vue';

function useCount(defaultValue) {
    const count = ref(defaultValue || 0);
    const setCount = (value) => {
        count.value = value;
    }
    return [count, setCount];
}

export default useCount;