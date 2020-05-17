import Vue from 'vue'

import './styles/quasar.scss'
import 'quasar/dist/quasar.ie.polyfills'
import iconSet from 'quasar/icon-set/material-icons-outlined.js'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import { Quasar } from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: { /* not needed if importStrategy is not 'manual' */ },
  directives: { /* not needed if importStrategy is not 'manual' */ },
  plugins: {
  },
  iconSet: iconSet
})