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
  <DataTable :value="history" stripedRows scrollable scrollHeight="350px">
    <Column field="time" header="Time" :sortable="true">
      <template #body="slotProps">
        {{ formatLabelText(slotProps.data.time) }}
      </template>
    </Column>
    <Column field="count" header="Total Stores"></Column>
  </DataTable>
</template>
