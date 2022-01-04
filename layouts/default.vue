<template>
  <v-app>
    <v-app-bar
      app
      fixed
      absolute
      plain
      elevation="0"
      v-if="['xs','sm'].includes($vuetify.breakpoint.name)"
    >
      <v-img
        min-width="50px"
        max-width="50px"
        src="dept-logo-dark.svg"
        contain
      ></v-img>
      <v-spacer />
      <span class="text-h5">MENU</span>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-equal</v-icon>
      </v-btn>
    </v-app-bar>

    <v-app-bar
      app
      fixed
      absolute
      class="transparent pt-10"
      style="padding-left: 110px; padding-right: 110px"
      plain
      elevation="0"
      v-if="['md', 'lg', 'xl'].includes($vuetify.breakpoint.name)"
    >
      <v-img
        min-width="100px"
        max-width="100px"
        class="ml-n4"
        src="dept-logo-dark.svg"
        contain
      ></v-img>
      <v-spacer />
      MENU
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-equal</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="ma-md-5 mt-md-n10 ma-lg-5 mt-lg-n10">
      <Nuxt />
    </v-main>

    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed color="black">
      <v-card flat elevation="0" color="black">
        <v-card-text style="color: white;">MENU TODO</v-card-text>
      </v-card>
    </v-navigation-drawer>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'DEPT',
    }
  },
}
</script>
<style>
@media (min-width: 960px) {
  .v-toolbar__content,
  .v-toolbar__extension {
    border-bottom: 2px solid black;
  }
}

</style>
