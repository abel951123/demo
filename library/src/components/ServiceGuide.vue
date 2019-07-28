<template>
  <div>
    <div>新闻导航</div>
    <router-link :to="{name:'ServicelssueDetails'}">servicelssueDetails</router-link>
    <router-link :to="{name:'ServiceIssueList'}">serviceIssueList</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style scoped>

</style>
