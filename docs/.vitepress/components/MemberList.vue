<script lang="ts" setup>
import MemberCard from "./MemberCard.vue";

defineProps<{
  data: Array<any>
}>();
</script>

<template>
  <div class="members">
    <member-card v-for="member in data" :key="member.name" v-bind="member" />
  </div>
</template>

<style scoped>
.members {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
  gap: 8px;
}
</style>