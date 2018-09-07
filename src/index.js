import Vue from 'vue'
import App from './app.vue'
import VueRouter from 'vue-router'

const root = document.createElement("div")
document.body.appendChild(root)
Vue.use(VueRouter)

const Link1 = {template: '<div>link1</div>'}
const Link2 = {template: '<div>link2</div>'}

const routes = [
  { path: '/link1', component: Link1 },
  { path: '/link2', component: Link2 }
]
 
// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

new Vue({
    router,
    render: (h) => h(App)
}).$mount(root)