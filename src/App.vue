<template>
  <!-- App.vue -->

  <v-app>
    <!-- Sizes content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <navigation></navigation>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app></v-footer>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
export default {
  name: 'App',

  components: {
    Navigation
  },

  data: () => ({
    //
  }),
};
</script>
