<!-- Please remove this file from your project -->
<template>
  <v-card
    tile
    elevation="0"
    class="mt-16 ml-0 mr-0 ml-md-16 mr-md-16 ml-lg-16 mr-lg-16 ml-xl-16 mr-xl-16 case-card"
    :class="{ 'card-no-image': caseImageUrl==='' }"
    @click="handleCaseClick"
  >
    <v-img
      :src="caseImageUrl"
      class="case-card-image"
      v-if="caseImageUrl!==''"
    >
    </v-img>
    <v-card-title class="card-title pl-0">{{ caseTitle }}</v-card-title>
    <v-card-text class="card-text pl-0 pb-0">{{ caseDescription }}</v-card-text>
    <v-card-actions class="pl-0">
      <v-btn
        class="pl-0 card-action-button"
        plain
        text
        elevation="0"
        @click="handleCaseClick"
        v-if="['md', 'lg', 'xl'].includes($vuetify.breakpoint.name)"
      >
        <v-icon small class="pr-1">mdi-play</v-icon>
        VIEW CASE
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CaseCard',
  data() {
    return {
      title: '',
      description: '',
      imageUrl: ''
    }
  },
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
.card-title {
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  line-height: 2;
  letter-spacing: normal;
  color: #939393 !important;
}

.card-text {
  font-size: 30px;
  line-height: 1.07;
  letter-spacing: normal;
  color: #272727 !important;
}

.card-action-button {
  color: #1a18f7 !important;
  opacity: 1 !important;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  line-height: 2.14;
  letter-spacing: normal;
}

.card-no-image {
  border-top: 1px solid #dddddd;
}

@media(max-width: 600px) {

  .case-card {
    width: 335px !important;
  }
  .case-card-image {
    width: 335px !important;
    height: 286px !important;
  }
  .card-title {
    font-size: 14px;
  }
  .card-text {
    font-size: 38px;
  }
}

@media (min-width: 600px) {
  .case-card {
    width: 585px !important;
  }
  .case-card-image {
    width: 585px !important;
    height: 500px !important;
  }
}
</style>
