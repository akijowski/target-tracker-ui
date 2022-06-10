<script setup lang="ts">
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";

import HistoryTable from "@/components/HistoryTable.vue";

import type { APIProduct, APIStatsResponse } from "@/utils/api";
import { historyForProduct } from "@/utils/api";
import { styles } from "@/utils/styles";

defineProps<{
  stats: APIStatsResponse;
}>();

const mobileAccordionHeader = (product: APIProduct): string => {
  return `${product.name} - (${product.result?.total_stores}) stores`;
};
</script>

<template>
  <div>
    <div :class="styles.sectionTitle">Currently Available</div>
    <Accordion>
      <AccordionTab
        v-for="product in stats.products"
        :key="product.tcin"
        :header="mobileAccordionHeader(product)"
      >
        <div v-for="store in product.result?.stores" :key="store.location_name">
          <p>{{ store.location_name }}: {{ store.available }} available</p>
        </div>
        <HistoryTable
          :history="historyForProduct(stats.history, product.name)"
        />
      </AccordionTab>
    </Accordion>
  </div>
</template>
