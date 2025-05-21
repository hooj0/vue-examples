export default {
    name: "I18n-plugin",
    install(app, options) {
        app.config.globalProperties.$translate = function (key) {
            return key.split('.').reduce((pre, current) => {
                console.log('pre: ', pre, ", current:", current);
                return pre[current];
            }, options);
        };

        app.provide("i18n", options);
    }
}