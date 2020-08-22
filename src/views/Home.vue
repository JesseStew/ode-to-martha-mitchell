<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card
          class="mx-auto">
          <v-img
            class="white--text align-end"
            src="../assets/home/cabin-cool.jpg">
            <v-card-title
              style="float: right"
              class="pb-15 pr-15">An Ode to Martha Mitchell</v-card-title>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <navigation></navigation>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'Home',
  components: {
    Navigation
  }
}
</script>
