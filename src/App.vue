<template>
  <div id="app">
    <header>
      <NavBar />
    </header>
    
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import NavBar from './components/NavbarPage.vue';
</script>
