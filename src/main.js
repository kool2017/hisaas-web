import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import 'element-ui/lib/theme-default/index.css'    // 默认主题
// import '../static/css/theme-green/index.css'       // 浅绿色主题
import "babel-polyfill"

Vue.use(ElementUI)
axios.defaults.baseURL = 'http://localhost/hisaas'
// axios.defaults.baseURL = 'http://localhost/hisaas'
axios.defaults.withCredentials = true
axios.interceptors.response.use(
    response => {
        var pkgOut = response.data
        var SYCOMMUNZ = pkgOut.SYCOMMUNZ
        var errorCode = SYCOMMUNZ[0].ERROR_CODE
        var errorMsg = SYCOMMUNZ[0].ERROR_MSG
        if (errorCode != '0000000') {
            return Promise.reject(errorMsg);
        }
        return response;
    },
    error => {
        if (error.response) {
            if (error.response.status == 401) {
                router.push('/')
            }
        }
        return Promise.reject(error.response.data) // 返回接口返回的错误信息
    }
);

Vue.prototype.$http = axios
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
