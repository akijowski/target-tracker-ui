<script setup lang="ts">
import { computed, ref } from "vue";
import type {Ref} from "vue";
import {useFetch} from "@vueuse/core";

import { getStats } from "@/utils/api";
import type { APIStatsResponse } from "@/utils/api";
import { styles } from "@/utils/styles";
import { formatTimeRelativeToNow } from "@/utils/time";

import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import StatChart from "@/components/StatChart.vue";
import ProductPanel from "@/components/ProductPanel.vue";
import MobileBar from "@/components/MobileBar.vue";
import MobileStats from "@/components/MobileStats.vue";

const {data, error, isFetching} = useFetch<APIStatsResponse>(`${import.meta.env.VITE_STATS_API_URL}/historical_stats.json`).json()
const stats = data as Ref<APIStatsResponse>
const updatedTimeFriendly = computed(() => {
  if (stats) {
    return formatTimeRelativeToNow(stats.value.last_updated_at);
  }
});
</script>
<template>
  <header v-if="!isFetching">
    <AppHeader
      :created-at="stats.created_at"
      :last-updated-at="stats.last_updated_at"
    />
  </header>
  <main>
    <div v-if="isFetching && !error">
    Fetching data
    </div>
    <div v-else>
      <div :class="styles.notificationBar">
        Last Updated: {{ updatedTimeFriendly }}
      </div>
      <div class="md:hidden">
        <MobileBar />
        <MobileStats :stats="stats" />
      </div>
      <div class="hidden md:block">
        <ProductPanel :products="stats.products" />
        <StatChart :api-stats="stats.history" />
      </div>
    </div>
  </main>

  <footer>
    <AppFooter />
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
