<script setup lang="ts">
import { ref } from "vue";
// @ts-ignore
import autocolors from "chartjs-plugin-autocolors";
import Chart from "primevue/chart";

import { getStats } from "@/utils/api";
import { getChartData } from "@/utils/chart";

const stats = getStats();

const chartData = getChartData(stats.value.history);

const chartOptions = ref({
  scales: {
    y: {
      min: 0,
      suggestedMax: 3,
      title: {
        display: true,
        text: 'Total Available'
      }
    },
  },
});
</script>

<template>
  <Chart
    type="line"
    :data="chartData"
    :options="chartOptions"
    :plugins="[autocolors]"
  />
</template>
