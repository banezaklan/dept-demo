<!-- Please remove this file from your project -->
<template>
  <v-card
    tile
    elevation="0"
  >
    <v-card-text>
      <v-row no-gutters justify="start" justify-md="end" >
        <v-col cols="12" sm="6" md="3" class="text-left text-sm-right">
          <v-select
            :items="categories"
            label=""
            :value="0"
            style="font-size: 30px; font-weight: 700;"
            @change="handleFilterChange"
            v-model="selectedCategoryId"
          >
            <template #prepend>
              <div class="filter-line-text" style="width: 100px;">Show me</div>
            </template>
          </v-select>
        </v-col>

        <v-col cols="12" md="3" sm="4">
          <v-select
            :items="industries"
            label=""
            :value="0"
            style="font-size: 30px; font-weight: 700;"
            @change="handleFilterChange"
            v-model="selectedIndustryId"
          >
            <template #prepend>
              <div class="filter-line-text" style="width: 30px;">in</div>
            </template>
          </v-select>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'CasesFilter',
  data() {
    return {
      selectedCategoryId: 0,
      selectedIndustryId: 0,
      categories: [
        { value: 0, text: 'all work'},
        { value: 1, text: 'design' },
        { value: 2, text: 'development' },

      ],
      industries: [
        { value: 0, text: 'all industries'},
        { value: 1, text: 'e-commerce' },
        { value: 2, text: 'tourism' },
        { value: 3, text: 'urban development' },
        { value: 4, text: 'food industry'},
        { value: 5, text: 'technology'},
        { value: 6, text: 'culture'},
        { value: 7, text: 'interior architecture' }
      ]
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
    handleFilterChange(e) {
      console.log('handleCaseClick', {
        categoryId: this.selectedCategoryId,
        industryid: this.selectedIndustryId
      })
      this.$emit('onFilterChange', {
        categoryId: this.selectedCategoryId,
        industryId: this.selectedIndustryId
      })
    }
  }
}
</script>
<style scoped>



@media(max-width: 600px) {
  .filter-line-text {
    font-size: 30px;
    font-weight: 500;
    line-height: 1.07;
    letter-spacing: normal;
    color: #a3a3a3;
  }
}

@media (min-width: 600px) {
  .filter-line-text {
    font-size: 30px;
    font-weight: 500;
    line-height: 1.07;
    letter-spacing: normal;
    color: #a3a3a3;
  }
}
</style>
