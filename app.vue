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

body {
    overflow-x: hidden; /* 수평 스크롤 숨기기 */
}

.app {
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

.page {
    width: 100%;
    max-width: 1132px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    margin-top: 57px;
    padding: 24px 0;
    gap: 24px;
}
</style>
