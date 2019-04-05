<template>
  <div class="app-wrapper">
    <sidebar/>
    <div class="main-container">
      <app-nav/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import AppNav from 'views/components/layouts/AppNav'
import Sidebar from 'views/components/layouts/Sidebar'

export default {
  components: { Sidebar, AppNav },
  methods: {
  }
}
</script>

<style>
</style>
