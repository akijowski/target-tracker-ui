<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";

import type { APIStatValue } from "@/utils/api";
import { formatLabelText } from "@/utils/time";

defineProps<{
  history: APIStatValue[];
}>();
</script>

<template>
  <DataTable :value="history" responsiveLayout="scroll" stripedRows>
    <Column field="time" header="Time">
      <template #body="slotProps">
        {{ formatLabelText(slotProps.data.time) }}
      </template>
    </Column>
    <Column field="count" header="Count"></Column>
  </DataTable>
</template>
