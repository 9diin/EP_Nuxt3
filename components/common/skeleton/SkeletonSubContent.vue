<template>
    <div class="w-full flex flex-col gap-4">
        <Skeleton class="w-full h-44 rounded-lg" />
        <div class="w-full flex flex-col gap-4">
            <div class="flex items-center gap-2">
                <Skeleton class="w-8 h-8 rounded-full" />
                <Skeleton class="w-16 h-4 rounded-lg" />
                &middot;
                <Skeleton class="w-20 h-4 rounded-lg" />
            </div>
            <div class="w-full flex flex-col gap-2">
                <Skeleton class="w-full h-6 rounded-lg" />
                <Skeleton class="w-full h-6 rounded-lg" />
            </div>
            <div class="w-full flex flex-col gap-2">
                <Skeleton class="w-full h-4 rounded-lg" />
                <Skeleton class="w-full h-4 rounded-lg" />
                <Skeleton class="w-full h-4 rounded-lg" />
            </div>
            <div class="flex items-center gap-2">
                <Skeleton class="w-16 h-4 rounded-lg" />
                &middot;
                <Skeleton class="w-20 h-4 rounded-lg" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Skeleton } from "~/components/ui/skeleton";
</script>
