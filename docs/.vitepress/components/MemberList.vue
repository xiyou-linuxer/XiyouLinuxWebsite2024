<script>
export default { props: { data: { type: Array } } }
</script>

<template>
  <div class="members">
    <div class="card" v-for="member in data" :key="member.name">
      <div class="avatar"
        :style="`background-image: url(https://github.com/${member.github}.png), url(https://q1.qlogo.cn/g?b=qq&nk=${member.qq}&s=3), url(/favicon.ico)`">
      </div>
      <span class="name">{{ member.name || member.github }}</span>
      <span class="title">{{ member.title }}</span>
      <template v-if="member.github">
        <a :href="`https://github.com/${member.github}`" target="_blank">
          <i class="fa-brands fa-github"></i>{{ member.github }}
        </a>
      </template>
      <template v-if="member.link && member.linkText">
        <a :href="member.link" target="_blank">
          <i class="fa-solid fa-link"></i>{{ member.linkText }}
        </a>
      </template>
    </div>
  </div>
</template>

<style scoped>
.members {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
  gap: 8px;
}

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
  background-size: cover, cover, cover;
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