<template>
  <!-- App.vue -->

  <v-app>
    <!-- Sizes content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <navigation>
        <router-view></router-view>
      </navigation>
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

<style>
.main-text {
    font-size: 1.2em;
    margin-top: 4px;
    padding: 30px;
}
.text-border {
    border-left: 5.1px solid grey;
    border-right: 5.1px solid grey;
    /* border-bottom: 5.1px solid grey; */
}
.small-text {
	font-size: .7em;
    font-weight: bold;
}
.martha-mitchell {
	font-size: .9em;
    font-weight: bold;
}
.emphasis {
    font-size: 1.2em;
    font-weight: bold;
}
.italic {
    font-style: italic;
}
.h-l {
    font-weight: bold;
}
.douglas {
    font-weight: bold;
}
.interview-title {
    margin-top: -41px;
    font-size: 3.5em;
}
.home-title {
    font-size: 2em;
    color: #14143a;
}
.home-text {
    font-size: 1.2em;
    /* font-family: 'Trebuchet MS'; */
    /* font-weight: bold; */
}
@font-face {
    font-family: "Adequate-ExtraLight";
    src: url("./assets/fonts/Adequate-ExtraLight.ttf");
}
@font-face {
    font-family: "ALBA";
    src: url("./assets/fonts/ALBA____.TTF");
}
@font-face {
    font-family: "ALBAM";
    src: url("./assets/fonts/ALBAM___.TTF");
}
@font-face {
    font-family: "ALBAS";
    src: url("./assets/fonts/ALBAS___.TTF");
}
@font-face {
    font-family: "AlbertText";
    src: url("./assets/fonts/AlbertText-Bold.ttf");
}
@font-face {
    font-family: "Blockbrokers";
    src: url("./assets/fonts/Blockbrokers.otf");
}
@font-face {
    font-family: "federalescort";
    src: url("./assets/fonts/federalescort.ttf");
}
@font-face {
    font-family: "Flottflott";
    src: url("./assets/fonts/Flottflott.ttf");
}
@font-face {
    font-family: "GOODTIME";
    src: url("./assets/fonts/GOODTIME.ttf");
}
@font-face {
    font-family: "Hackney-Block";
    src: url("./assets/fonts/Hackney-Block-Regular.ttf");
}
@font-face {
    font-family: "Marker";
    src: url("./assets/fonts/Marker.ttf");
}
@font-face {
    font-family: "Old Figaro Cursive";
    src: url("./assets/fonts/Old Figaro Cursive.ttf");
}
@font-face {
    font-family: "RAINYDAYS";
    src: url("./assets/fonts/RAINYDAYS.ttf");
}
@font-face {
    font-family: "SF Theramin Gothic Bold Oblique";
    src: url("./assets/fonts/SF Theramin Gothic Bold Oblique.ttf");
}
@font-face {
    font-family: "SF Theramin Gothic Bold";
    src: url("./assets/fonts/SF Theramin Gothic Bold.ttf");
}
@font-face {
    font-family: "SF Theramin Gothic Condensed Oblique";
    src: url("./assets/fonts/SF Theramin Gothic Condensed Oblique.ttf");
}
@font-face {
    font-family: "SF Theramin Gothic Condensed";
    src: url("./assets/fonts/SF Theramin Gothic Condensed.ttf");
}
@font-face {
    font-family: "SF Theramin Gothic Oblique";
    src: url("./assets/fonts/SF Theramin Gothic Oblique.ttf");
}
@font-face {
    font-family: "SF Theramin Gothic Shaded Oblique";
    src: url("./assets/fonts/SF Theramin Gothic Shaded Oblique.ttf");
}
@font-face {
    font-family: "SF Theramin Gothic Shaded Oblique";
    src: url("./assets/fonts/SF Theramin Gothic Shaded.ttf");
}
@font-face {
    font-family: "SF Theramin Gothic";
    src: url("./assets/fonts/SF Theramin Gothic.ttf");
}
@font-face {
    font-family: "Volkhov-Bold";
    src: url("./assets/fonts/Volkhov-Bold.ttf");
}
@font-face {
    font-family: "Volkhov-Regular";
    src: url("./assets/fonts/Volkhov-Regular.ttf");
}
@font-face {
    font-family: "Westmeath";
    src: url("./assets/fonts/Westmeath.ttf");
}
@font-face {
    font-family: "Lamplighter Script Regular";
    src: url("./assets/fonts/Lamplighter Script Regular.ttf");
}
</style>