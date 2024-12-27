<template>
    <div class="app">
        <AppHeader />
        <NuxtPage />
    </div>
</template>

<script setup lang="ts">
import AppHeader from "./components/common/AppHeader.vue";
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.app {
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: flex-start;
}
</style>
