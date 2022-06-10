<script setup lang="ts">
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";

import HistoryTable from "@/components/HistoryTable.vue";

import type { APIProduct, APIStatsResponse } from "@/utils/api";
import { historyForProduct } from "@/utils/api";

defineProps<{
  stats: APIStatsResponse;
}>();

const mobileAccordionHeader = (product: APIProduct): string => {
  return `${product.name} - (${product.result?.total_stores}) stores`;
};
</script>

<template>
  <Accordion class="mx-2">
    <AccordionTab
      v-for="product in stats.products"
      :key="product.tcin"
      :header="mobileAccordionHeader(product)"
    >
      <div v-for="store in product.result?.stores" :key="store.location_name">
        <p>{{ store.location_name }}: {{ store.available }} available</p>
      </div>
      <HistoryTable :history="historyForProduct(stats.history, product.name)" />
    </AccordionTab>
  </Accordion>
</template>
