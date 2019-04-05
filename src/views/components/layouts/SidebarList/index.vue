<template>
  <div class="sidebar-list">
    <slot name="header"/>
    <ul class="sidebar-items">
      <li v-for="item in list" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
    }
  },
  computed: {
  }
}
</script>

<style scoped>
.sidebar-items li {
  color: #ffffff;
}
</style>
