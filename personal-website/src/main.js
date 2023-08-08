import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import HeaderComp from './components/HeaderComp.vue'
import AboutComp from './components/AboutComp.vue'
import SkillComp from './components/SkillComp.vue'
import ExperComp from './components/ExperComp.vue'
import Portfolid from './components/Portfolid.vue'
import ContactComp from './components/ContactComp.vue'

const app = createApp(App)
app.component('header-comp',HeaderComp)
app.component('about-comp',AboutComp)
app.component('skill-comp',SkillComp)
app.component('exper-comp',ExperComp)
app.component('portfolid',Portfolid)
app.component('contact-comp',ContactComp)
app.mount('#app')