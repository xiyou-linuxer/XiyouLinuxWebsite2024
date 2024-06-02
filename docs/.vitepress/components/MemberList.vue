<script lang="ts" setup>
import { ref } from 'vue';
import MemberCard from "./MemberCard.vue";
import memberData from './memberData.js';

const activeGrade = ref<string>(Object.keys(memberData)[0]);

function setActiveGrade(grade: string) {
  activeGrade.value = grade;
}
</script>

<template>
  <div class="tabs-container">
    <div class="tabs">
      <button v-for="(members, grade) in memberData" :key="grade" :class="{ active: activeGrade === grade }"
        @click="setActiveGrade(grade)">
        {{ grade }} ({{ members.length }})
      </button>
    </div>
    <div class="tab-contents">
      <div v-for="(members, grade) in memberData" :key="grade" v-show="activeGrade === grade">
        <div class="members">
          <member-card v-for="member in members" :key="member.name" v-bind="member" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tabs {
  margin: 2rem 0;
  display: flex;
  gap: .5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.tabs button {
  border: none;
  padding: 4px 8px;
  background-color: var(--vp-c-bg-soft);
  cursor: pointer;
  border-radius: 4px;
}

.tabs button.active {
  background-color: var(--vp-c-brand);
  color: var(--vp-c-bg);
}

.members {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
  gap: 8px;
}
</style>