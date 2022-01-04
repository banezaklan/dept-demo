<!-- Please remove this file from your project -->
<template>
  <v-card tile elevation="0" @click="handleCaseClick">
    <v-img
      :src="caseImageUrl"
      max-height="908px"
    >
      <v-sheet class="transparent text-h2 text-sm-h1 text-md-h1 text-lg-h1 text-xl-h1 hero-title">
        <span style="color:black;">WORK</span>
      </v-sheet>
    </v-img>
    <v-card-actions class="ml-2 mr-2">
      <v-spacer v-if="['md', 'lg', 'xl'].includes($vuetify.breakpoint.name)"></v-spacer>
      <v-btn
        v-if="['md', 'lg', 'xl'].includes($vuetify.breakpoint.name)"
        color="black"
        class="hero-button"
        x-large
        elevation="0"
      >
        <span style="color: white;">VIEW CASE</span>
      </v-btn>
      <v-btn
        v-if="['sm', 'xs'].includes($vuetify.breakpoint.name)"
        color="black"
        block
        class="hero-button-below mt-1"
        x-large
        elevation="0"
        @click="handleCaseClick"
      >
        <span style="color: white;">VIEW CASE</span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'HeroCard',
  props: {
    caseId: {
      type: Number,
      default: 0,
    },
    caseTitle: {
      type: String,
      default: '',
    },
    caseDescription: {
      type: String,
      default: '',
    },
    caseImageUrl : {
      type: String,
      default: '',
    }
  },
  methods: {
    handleCaseClick(e) {
      console.log('handleCaseClick', this.caseId)
      this.$emit('click', this.caseId)
    }
  }

}
</script>
<style scoped>

.title-text {
  font-size: 400px;
  padding-left: 100px;
  position: absolute;
  top: 160px;
}

.hero-button {
  margin-top: -250px;
  margin-right: 80px;
  min-width: 170px !important;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
}

.hero-button-below {
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
}

.hero-title {
  padding-top: 100px;
  padding-left: 10px;
}


@media (min-width: 600px) and (max-width: 960px) {
  .hero-title {
    padding-top: 200px;
    padding-left: 90px;
  }
}

@media (min-width: 960px) and (max-width: 1264px) {
  .hero-title {
    padding-top: 200px;
    padding-left: 90px;
  }
}

@media (min-width: 1264px) and (max-width: 1904px) {
  .hero-title {
    padding-top: 200px;
    padding-left: 90px;
  }
}

@media (min-width: 1904px) {
  .hero-title {
    padding-top: 200px;
    padding-left: 90px;
  }
}

</style>
