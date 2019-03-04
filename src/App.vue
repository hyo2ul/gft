<template>
  <div id="app">
    <BreadCrumb />
    <router-view></router-view>
  </div>
</template>

<script>

import BreadCrumb from './components/ui/breadcrumb';

export default {
  name: 'app',
  components: {
    BreadCrumb,
  },
};
</script>

<style>
</style>
