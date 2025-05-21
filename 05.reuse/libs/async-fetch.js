const {ref, watchEffect, toValue} = Vue;

export function useAsyncFetch(url) {
    const data = ref(null);
    const error = ref(null);

    fetch(url)
        .then(response => response.json())
        .then(json => data.value = json)
        .catch(e => error.value = e);

    return {
        data,
        error
    }
}

export function useAsyncFetchComposition(url) {
    const data = ref(null);
    const error = ref(null);

    watchEffect(() => {
        data.value = null;
        error.value = null;

        fetch(toValue(url))
            .then(response => response.json())
            .then(json => data.value = json)
            .catch(e => error.value = e);
    });

    return {
        data,
        error
    }
}