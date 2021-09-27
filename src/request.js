//axios用于向后端发起ajax请求
import axios from 'axios'
import router from './router'
import store from './store'
import { Toast } from 'cube-ui'



const service = axios.create(
    {
        // url = base url + request url
        //本地
        baseURL: "http://127.0.0.1:8089",
        timeout: 5000
    }
)


// 请求响应拦截
service.interceptors.response.use(response => {
    const res = response.data
    //token过期
    if (res.msg === '登录过期，重新登录') {
        store.dispatch('clearToken')
        localStorage.removeItem('token')
        Toast.$create({
            type: 'txt',
            txt: res.msg,
            time: 1500,
            onTimeout: () => {
                /**
                 * router.go(n)这个方法的参数是一个整数，意思是在 history 记录中向前或者后退多少步，类似 window.history.go(n)
                 router.push(location)想要导航到不同的 URL，则使用 router.push 方法。这个方法会向 history 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 URL。
                router.replace(location)跟 router.push 很像，唯一的不同就是，它不会向 history 添加新记录，而是跟它的方法名一样 —— 替换掉当前的 history 记录
                */
               router.replace({path: '/login'})
            }
        }).show()
    }else if(res.code === -1){
        Toast.$create({
            type: 'txt',
            txt: res.msg,
            time: 1500,
        }).show()
        return Promise.reject(new Error(res.msg || 'Error'))

    }
    return response
})



export default service
