<script setup lang="ts">
import { computed, ref } from "vue";
// @ts-ignore
import autocolors from "chartjs-plugin-autocolors";
import 'chartjs-adapter-date-fns';
import Chart from "primevue/chart";

import type { APIStat} from "@/utils/api"
import { getChartData } from "@/utils/chart";
import { styles } from "@/utils/styles";

const props = defineProps<{
  apiStats: APIStat[]
}>()

const chartData = computed(() => {
  return getChartData(props.apiStats)
})

const chartOptions = ref({
  scales: {
    x: {
      type: 'time',
      time: {
        unit: 'day',
        round: true
      },
      title: {
        display: true,
        text: "Date"
      }
    },
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
    <div><span class="font-light vertical-align-super">*</span>Total Available is for all available stores on that day</div>
    <Chart
      type="line"
      :data="chartData"
      :options="chartOptions"
      :plugins="[autocolors]"
      class="border-1 border-300 border-dashed border-rounded px-3 py-3"
    />
  </div>
</template>
