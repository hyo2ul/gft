<template>
  <div id="app">
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>
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
