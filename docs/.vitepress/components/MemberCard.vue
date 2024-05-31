<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  name: string,
  github: string,
  qq: string,
  title: string,
  link: string,
  linkText: string
}>();

const avatarLink = computed(() => {
  return props.github
    ? `https://github.com/${props.github}.png`
    : props.qq
      ? `https://q1.qlogo.cn/g?b=qq&nk=${props.qq}&s=3`
      : `/favicon.ico`;
});
</script>

<template>
  <div class="card">
    <img class="avatar" :src="avatarLink" />
    <span class="name">{{ name }}</span>
    <span class="title">{{ title }}</span>
    <a v-if="github" :href="`https://github.com/${github}`" target="_blank">
      <i class="fa-brands fa-github"></i>{{ github }}
    </a>
    <a v-if="link && linkText" :href="link" target="_blank">
      <i class="fa-solid fa-link"></i>{{ linkText }}
    </a>
  </div>
</template>

<style scoped>
.card {
  padding: 8px;
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.2em;
}

.card>.avatar {
  width: 3rem;
  height: 3rem;
  border-radius: 4rem;
  margin: .5rem 0;
  box-shadow: 2px 4px 1rem var(--vp-c-divider);
}

.card>.name {
  font-weight: 600;
}

.card>.title {
  color: var(--vp-c-text-3);
  margin-bottom: .5em;
  font-size: .8em;
  flex-grow: 1;
}

.card a {
  font-size: .8em;
  text-wrap: nowrap;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  background: unset;
}

.external-link-icon-enabled :is(.vp-doc a[href*='://'], .vp-doc a[target='_blank'])::after {
  content: unset;
}
</style>