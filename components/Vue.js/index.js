import Vue from "vue";
import wrap from "@vue/web-component-wrapper";

const tag = "vue-wc";
const VueWC = wrap(Vue, () => import(`./Vue-WC.vue`));

window.customElements.define(tag, VueWC);
