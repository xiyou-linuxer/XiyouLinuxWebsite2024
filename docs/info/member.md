<script setup>
    import MemberList from '/.vitepress/components/MemberList.vue'
    import memberData from '/.vitepress/components/memberData.js'
</script>

# 成员

::: warning 待补充
请需要补充信息的成员填写内部文档。
:::

## 2023 级

<MemberList :data="memberData.g2023" />

## 2022 级

<MemberList :data="memberData.g2022" />

## 2021 级

<MemberList :data="memberData.g2021" />
