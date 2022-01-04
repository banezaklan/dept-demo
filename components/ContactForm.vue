<!-- Please remove this file from your project -->
<template>
  <v-card tile elevation="0" >
    <v-card-text>

      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        class="pt-2 pl-4 pr-4"
      >
        <v-row v-if="['xs', 'sm'].includes($vuetify.breakpoint.name)">
          <v-col>
            <span style="color: #272727; font-size: 30px; line-height: 1; font-style: normal;">QUESTION? WE ARE HERE TO HELP!</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="3" v-if="['md', 'lg', 'xl'].includes($vuetify.breakpoint.name)">
            <span style="color: #272727; font-size: 60px; line-height: 1; font-style: normal;">QUESTION? WE ARE HERE TO HELP!</span>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="NAME"
              required
            ></v-text-field>
          </v-col>
          <v-col md="4">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="EMAIL"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="3" v-if="['md', 'lg', 'xl'].includes($vuetify.breakpoint.name)">&nbsp;</v-col>
          <v-col md="6">
            <v-textarea label="MESSAGE" v-model="message"></v-textarea>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="3" v-if="['md', 'lg', 'xl'].includes($vuetify.breakpoint.name)">&nbsp;</v-col>
          <v-col>
            <v-btn
              :disabled="!valid"
              color="#1a18f7"
              class="mr-4"
              @click="validate"
              width="140"
            >
              <span style="color: white;">SEN</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'ContactForm',
  props: {
  },

  data() {
    return {
      message: '',
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],

    }
  },

  methods: {
    validate () {
      this.$refs.form.validate()
    },
  }


}
</script>
<style scoped>



@media(max-width: 600px) {

}


@media (min-width: 600px) and (max-width: 960px) {

}

@media (min-width: 960px) and (max-width: 1264px) {

}

@media (min-width: 1264px) and (max-width: 1904px) {

}

@media (min-width: 1904px) {

}

</style>
