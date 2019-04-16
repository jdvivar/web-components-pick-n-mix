<template>
  <div :style="style">
    <h4>Vue.js Web Component</h4>
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  name: "vue-wc",
  data() {
    return {
      style: `
        border: var(--wc-border);
        border-color: lightgreen;
        padding: var(--wc-padding);
        margin: var(--wc-margin);
      `
    }
  }
};
</script>

<!-- 
  <style> tags are not working in
  SFC with Parcel, it probably works
  with a custom Webpack config
 -->