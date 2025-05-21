const {onMounted, onUnmounted} = Vue;

export function useEventListener(target, event, handler) {
    onMounted(() => {
        target.addEventListener(event, handler);
    });
    onUnmounted(() => {
        target.removeEventListener(event, handler);
    });
}