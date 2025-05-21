const {ref, onMounted, onUnmounted} = Vue;
// 若在npm server中执行，导入js可以忽略后缀
import {useEventListener} from "./mouse-event.js";

export function useMouse() {
    const x = ref(0);
    const y = ref(0);
    function update(e) {
        x.value = e.pageX;
        y.value = e.pageY;
    }

    onMounted(() => {
        window.addEventListener('mousemove', update);
    });
    onUnmounted(() => {
        window.removeEventListener('mousemove', update);
    });

    return {x, y};
}

export function useMouseComposition() {
    const x = ref(0);
    const y = ref(0);

    useEventListener(window, 'mousemove', (e) => {
        x.value = e.pageX;
        y.value = e.pageY;
    })

    return {x, y};
}