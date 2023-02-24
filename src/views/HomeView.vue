
<template>
  <div class="home">
    <tableData/>
  </div>
</template>

<script setup>
  import login from '../components/login.vue'
  import tableData from '../components/tableData.vue'
</script>

<style>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>