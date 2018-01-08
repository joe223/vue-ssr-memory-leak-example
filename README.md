# vue-ssr-memory-leak-example

Detonate your server without fire.

WHAT WE SHOULD DO BEFORE:
- `$ npm run server`
- `$ npm run fire`

then:
- step 1: return same `router` or `vuex` instance
- step 2: run ``Vue.use([])`` in app.js
- step 3: Boom
