<template>
  <v-container>
    <v-row class="py-6">
      <v-col :key="key" cols="4" v-for="(char, key) in count">
        <AppCard></AppCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import AppCard from '../components/AppCard.vue'

  export default Vue.extend({
    name: 'HomePage',
    data() {
      return {
        count: '12345',
      }
    },
    components: {
      AppCard,
    },
  })
</script>
