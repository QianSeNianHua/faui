<template>
  <navbar />
  <div>
    <router-view />
  </div>
</template>

<script setup>
import Navbar from '@/views/AppFrame/Navbar'
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
}
</style>
