<script setup>
    import MemberList from '/.vitepress/components/MemberList.vue'
    import memberData from '/.vitepress/components/memberData.js'
</script>

# 成员

## 2023 级

<MemberList :data="memberData.g2023" />

## 2022 级

<MemberList :data="memberData.g2022" />

## 2021 级

<MemberList :data="memberData.g2021" />

## 2020 级

<MemberList :data="memberData.g2020" />

## 2019 级

<MemberList :data="memberData.g2019" />

## 2018 级

<MemberList :data="memberData.g2018" />

## 2014 级

<MemberList :data="memberData.g2014" />
