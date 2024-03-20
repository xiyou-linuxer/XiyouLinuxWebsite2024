<script>
export default {
  name: 'MemberList',

  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div class="members">
    <div v-for="member in data">
      <div class="card">
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
  </div>
</template>

<style scoped>
.members {
  display: flex;
  flex-wrap: wrap;
}

.members>div {
  width: 100%;
  padding: 4px;
  line-height: 1.2em;
}

@media (min-width: 240px) {
  .members>div {
    width: calc(100% / 2);
  }
}

@media (min-width: 480px) {
  .members>div {
    width: calc(100% / 3);
  }
}

@media (min-width: 640px) {
  .members>div {
    width: calc(100% / 4);
  }
}

.card {
  padding: 12px;
  border: 1px solid var(--vp-c-bg-soft);
  border-radius: 8px;
  height: 100%;
  background-color: var(--vp-c-bg-soft);
  transition: border-color .1s;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card:hover {
  border-color: var(--vp-c-brand-1);
}

.card>.avatar {
  width: 48px;
  height: 48px;
  border-radius: 100%;
  margin-bottom: 12px;
  box-shadow: 2px 4px 12px var(--vp-c-divider);
  background-size: cover, cover, cover;
}

.card>.name {
  font-weight: bold;
}

.card>.title {
  color: var(--vp-c-text-3);
  margin-bottom: 8px;
  font-size: .8em;
  flex-grow: 1;
}

.card a {
  font-size: .8em;
  text-wrap: nowrap;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  background: none;
}

.external-link-icon-enabled :is(.vp-doc a[href*='://'], .vp-doc a[target='_blank'])::after {
  content: unset;
}
</style>