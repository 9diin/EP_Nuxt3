<template>
    <div class="page">
        <div class="w-full flex flex-col items-center py-8 px-6 rounded-lg bg-neutral-100">
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
        <div class="w-full flex items-center gap-6">
            <Skeleton class="w-1/3 h-full rounded-lg" />
            <div class="w-2/3 flex flex-col gap-6">
                <div class="flex items-center gap-2">
                    <Skeleton class="h-10 w-10 rounded-full" />
                    <Skeleton class="w-20 h-5 rounded-lg" />
                    &middot;
                    <Skeleton class="w-32 h-5 rounded-lg" />
                </div>
                <div class="w-full flex flex-col gap-2">
                    <Skeleton class="w-full h-10 rounded-lg" />
                    <Skeleton class="w-full h-10 rounded-lg" />
                </div>
                <div class="w-full flex flex-col gap-2">
                    <Skeleton class="w-full h-5 rounded-lg" />
                    <Skeleton class="w-full h-5 rounded-lg" />
                    <Skeleton class="w-full h-5 rounded-lg" />
                </div>
                <div class="flex items-center gap-2">
                    <Skeleton class="w-20 h-5 rounded-lg" />
                    &middot;
                    <Skeleton class="w-20 h-5 rounded-lg" />
                </div>
            </div>
        </div>
        <Separator label="Or" class="my-6" />
        <div class="w-full flex flex-col gap-6">
            <div class="w-full flex items-center justify-between">
                <h4 class="scroll-m-20 text-2xl font-semibold tracking-tight">Latest News</h4>
                <Button class="bg-red-500 hover:bg-red-600">
                    See all
                    <ArrowRight />
                </Button>
            </div>
            <div class="w-full grid grid-cols-4 gap-6">
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
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Button } from "~/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-vue-next";
</script>
