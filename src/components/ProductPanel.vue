<script setup lang="ts">
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";

import type { APIProduct } from "@/utils/api";
import { styles } from "@/utils/styles";
import { computed } from "vue";

const props = defineProps<{
  products: APIProduct[];
}>();

const availableProducts = computed(() => {
  return props.products.filter((p) => {
    const total = p.result === undefined ? 0 : p.result?.pickup.total_stores;
    return total > 0;
  });
});
</script>

<template>
  <div>
    <div :class="styles.sectionTitle">Currently Available</div>
    <TabView
      scrollable
      class="px-3 py-3 mb-3 border-300 border-1 border-dashed border-round"
    >
      <TabPanel
        v-for="product in availableProducts"
        :key="product.tcin"
        :header="product.name"
      >
        <div :class="styles.productPanel">
          <div class="flex flex-wrap flex-row gap-3 justify-content-evenly">
            <div
              v-for="store in product.result?.pickup.stores"
              :key="store.location_name"
              class="flex flex-grow-1 justify-content-center px-3 py-3 m-2 bg-blue-500 text-white border-round shadow-3"
            >
              <div>
                {{ store.location_name }} has {{ store.available }} available
              </div>
            </div>
          </div>
        </div>
      </TabPanel>
    </TabView>
  </div>
</template>
