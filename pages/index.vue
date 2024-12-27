<template>
    <div class="page">
        <div class="w-full flex flex-col items-center p-6 rounded-lg bg-neutral-100">
            <p class="leading-7 font-light">WELCOME TO NUXT3 APPLICATION</p>
            <div class="flex items-center gap-1 mt-3">
                <h4 class="scroll-m-20 text-2xl font-semibold tracking-tight">Craft narratives ✍🏻 that ignite</h4>
                <h4 class="scroll-m-20 text-2xl font-semibold tracking-tight text-red-500">inspiration💡</h4>
            </div>
            <div class="flex items-center gap-1">
                <h4 class="scroll-m-20 text-2xl font-semibold tracking-tight text-red-500">knowledge 📘</h4>
                <h4 class="scroll-m-20 text-2xl font-semibold tracking-tight">and</h4>
                <h4 class="scroll-m-20 text-2xl font-semibold tracking-tight text-red-500">entertainment 🎬</h4>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.page {
    width: 100%;
    max-width: 1440px;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    padding: 24px;
}
</style>
