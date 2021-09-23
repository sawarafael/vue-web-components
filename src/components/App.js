import Vue from "vue";
import ComponentHello from "./HelloWorld";

const components = {
    ComponentHello
}

Object.keys(components).forEach(name => {
    Vue.component(name, components[name]);
})

export default components;