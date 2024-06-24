---
aside: false
---

<script setup>
    import memberData from '/.vitepress/components/memberData.js'
    import MemberList from '/.vitepress/components/MemberList.vue'
</script>

# 成员

<member-list :members="memberData" />

{{ Object.keys(memberData)[0] }}成员在暑期考核后可能会发生变动，并负责主持下一届纳新。

更新信息请参考 [<i class="fa-solid fa-book"></i>维护手册 - 成员列表组件](/manual/component/member-list)。
