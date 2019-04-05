<template>
  <div class="app-wrapper">
    <sidebar/>
    <div class="main-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from 'views/components/layouts/Sidebar'

export default {
  components: { Sidebar },
  methods: {
  }
}
</script>

<style>
</style>
