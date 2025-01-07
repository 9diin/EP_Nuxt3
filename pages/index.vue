<template>
    <div class="page">
        <!-- 애플리케이션 소개 문구(텍스트) 레이아웃 -->
        <AppBanner />
        <!-- 메인 콘텐츠 레이아웃 -->
        <SkeletonMainContent />
        <Separator label="Or" class="my-6" />
        <!-- 최근 콘텐츠 레이아웃 -->
        <div class="w-full flex flex-col gap-6">
            <div class="w-full flex items-center justify-between">
                <h4 class="scroll-m-20 text-2xl font-semibold tracking-tight">Latest News</h4>
                <Button class="bg-red-500 hover:bg-red-600">
                    See all
                    <ArrowRight />
                </Button>
            </div>
            <div class="w-full grid grid-cols-4 gap-6">
                <SkeletonSubContent />
                <SkeletonSubContent />
                <SkeletonSubContent />
                <SkeletonSubContent />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from "@/stores";
/** 커스텀 컴포넌트 */
import AppBanner from "~/components/common/AppBanner.vue";
import SkeletonMainContent from "~/components/common/skeleton/SkeletonMainContent.vue";
import SkeletonSubContent from "~/components/common/skeleton/SkeletonSubContent.vue";
/** Shadcn-vue 컴포넌트 */
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-vue-next";

const store = useStore();

onMounted(() => {
    store.getNews();
});
</script>
