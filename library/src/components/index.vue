<template>
  <div class="index">
    <home-top class="home-top"></home-top>
    <activity-center class="activity-center"></activity-center>
    <weekly-recommended class="weekly-recommended"></weekly-recommended>
  </div>
</template>

<script>
import HomeTop from '@/components/homeTop'
import ActivityCenter from '@/components/activityCenter'
import WeeklyRecommended from '@/components/weeklyRecommended'
export default {
  name: 'App',
  components: {
    homeTop: HomeTop,
    activityCenter: ActivityCenter,
    weeklyRecommended: WeeklyRecommended
  }
}
</script>
<style scoped>
</style>
