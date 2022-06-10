<script setup lang="ts">
import { ref } from "vue";
// @ts-ignore
import autocolors from "chartjs-plugin-autocolors";
import Chart from "primevue/chart";

import { getStats } from "@/utils/api";
import { getChartData } from "@/utils/chart";
import { styles } from "@/utils/styles";

const stats = getStats();

const chartData = getChartData(stats.value.history);

const chartOptions = ref({
  scales: {
    y: {
      min: 0,
      suggestedMax: 3,
      title: {
        display: true,
        text: "Total Available",
      },
    },
  },
});
</script>

<template>
  <div>
    <div :class="styles.sectionTitle">Historical Data</div>
    <Chart
      type="line"
      :data="chartData"
      :options="chartOptions"
      :plugins="[autocolors]"
      class="border-1 border-300 border-dashed border-rounded px-3 py-3"
    />
  </div>
</template>
