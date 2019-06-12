import Vue from 'vue'
import App from './App'


// import iView from 'iview'
// Vue.use(iView)
// import {Message} from 'iview'
// Vue.prototype.$Message = Message

Vue.config.productionTip = false
App.mpType = 'app'
// Vue.use(iView);

const app = new Vue(App)

app.$mount()

