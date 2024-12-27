<template>
    <header class="header">
        <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">Nuxt3 News API App</h3>
        <div class="flex items-center">
            <Avatar class="cursor-pointer">
                <AvatarImage src="https://github.com/9diin.png" alt="profile-image" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    </header>
</template>

<script setup lang="ts">
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
</script>

<style scoped>
.header {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 8px 24px;

    border-bottom: 1px solid #f5f5f5;
}
</style>
