<script setup lang="ts">
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";

import type { APIProduct } from "@/utils/api";
import { styles } from "@/utils/styles";

defineProps<{
  products: APIProduct[];
}>();
</script>

<template>
  <TabView scrollable>
    <TabPanel
      v-for="product in products"
      :key="product.tcin"
      :header="product.name"
    >
      <div :class="styles.productPanel">
        <div :class="styles.productPanelHeader">
          <p>Desired: {{ product.desired_quantity }}</p>
        </div>
        <div class="card">
          <div
            class="flex flex-wrap justify-content-center card-container blue-container gap-3"
          >
            <div
              v-for="store in product.result?.stores"
              :key="store.location_name"
              class="border-round w-12rem h-6rem bg-blue-300 text-white font-bold flex flex-column flex-initial align-items-center justify-content-center"
            >
              <div>
                {{ store.location_name }} has {{ store.available }} available
              </div>
            </div>
          </div>
        </div>
      </div>
    </TabPanel>
  </TabView>
</template>
