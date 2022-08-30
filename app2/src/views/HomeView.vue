<template>
  <div class="home">
    <div class="text-h2">App2</div>
    <div>
      <AppCard style="max-width: 200px"></AppCard>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppCard from 'app1/AppCard.vue';

@Component({
  components: {
    AppCard
  }
})
export default class HomeView extends Vue {}
</script>
 