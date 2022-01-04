<template>
  <div>
    <HeroCard
      :key="caseHero.id"
      :case-id="caseHero.id"
      :case-title="caseHero.client"
      :case-description="caseHero.description"
      :case-image-url="caseHero.image"
    ></HeroCard>
    <cases-filter @onFilterChange="handleFilterChange"></cases-filter>
    <v-card
      flat
      tile
      elevation="0"
      class="d-flex justify-center flex-row flex-md-row flex-lg-row flex-xl-row flex-wrap justify-space-around mb-6"
    >
      <CaseCard
        v-for="caseItem in casesLocal"
        :key="caseItem.id"
        :case-id="caseItem.id"
        :case-title="caseItem.client"
        :case-description="caseItem.description"
        :case-image-url="caseItem.image"
      ></CaseCard>
    </v-card>
    <ContactForm></ContactForm>
  </div>

</template>

<script>
import { mapState } from 'vuex'
import HeroCard from "../components/HeroCard";
import CaseCard from "../components/CaseCard";
import CasesFilter from "../components/CasesFilter";
import ContactForm from "../components/ContactForm";

export default {
  name: 'IndexPage',
  components: {ContactForm, CasesFilter, CaseCard, HeroCard},
  data() {
    return {
      casesLocal: [],
      caseHero : {}
    }
  },
  computed: {
    ...mapState('cases',['cases']),
  },
  watch: {
    cases(newVal) {
      console.log('cases', newVal)
      this.casesLocal = newVal
    }
  },
  async mounted() {
    await this.$store.dispatch('cases/getCases')
  },
  methods: {
    handleFilterChange(e) {
      console.log('e', e)
      this.$store.dispatch('cases/getCases', e)
    }
  },
  beforeRouteEnter(to, from, next) {
    next(async (vm) => {
      vm.caseHero = await vm.$store.dispatch('cases/getCasesHero')
      console.log('vm.caseHero', vm.caseHero)
      next()
    })
  },
}
</script>
