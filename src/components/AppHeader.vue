<script setup lang="ts">
import { computed } from "vue";
import { styles } from "@/utils/styles";
import { formatTimeText, formatTimeDistance } from "@/utils/time";

const props = defineProps<{
  createdAt: number;
  lastUpdatedAt: number;
}>();

const statsAge = computed(() => {
  return formatTimeDistance(props.createdAt, props.lastUpdatedAt);
});
const statsAgeText = computed(() => {
  return formatTimeText(props.createdAt);
});
</script>

<template>
  <div class="flex">
    <div :class="styles.header">
      <div :class="styles.headerContent">
        <div :class="styles.headerText">Target Tracker</div>
        <div :class="styles.headerSubcontent">
          <div :class="styles.headerSubtext" v-p-tooltip="statsAgeText">
            <i :class="styles.timeIcon"></i>
            <span>Since: {{ statsAge }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
