import Vue from 'vue'
import router from './router'
const t = 'text'.repeat(10**6)
Vue.use([]) // memory leak

Vue.component('c', {
    data () {
        return {
            text: t
        }
    },
    template: '<p>{{text}}</p>'
})

export default function createApp () {
    return new Vue({
        router,
        data () {
            return {
                text: t
            }
        },
        template: '<h1>{{text}}<c></c></h1>'
    })
}