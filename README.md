# vue-ssr-memory-leak-example

Detonate your server without fire.

WHAT WE SHOULD DO BEFORE:
- step 1: return same `router` or `vuex` instance
- step 2: run ``Vue.use([])`` in app.js

then:
- `$ npm run server`
- `$ npm run fire`
- just waiting and watching

