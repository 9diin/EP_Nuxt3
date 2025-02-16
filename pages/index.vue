<template>
    <div class="page">
        <!-- 애플리케이션 소개 문구(텍스트) 레이아웃 -->
        <AppBanner />
        <!-- 메인 콘텐츠 레이아웃 -->
        <SkeletonMainContent v-if="loading === 'pending'" />
        <MainContent v-else :data="mainArticle" />
        <Separator label="Or" class="my-6" />
        <!-- 최근 콘텐츠 레이아웃 -->
        <div class="w-full flex flex-col gap-6">
            <div class="w-full flex items-center justify-between">
                <h4 class="scroll-m-20 text-2xl font-semibold tracking-tight">Latest News</h4>
                <Button class="bg-red-500 hover:bg-red-600" @click="toggleShowAll">
                    {{ showAll ? "Show Less" : "See All" }}
                    <ArrowRight />
                </Button>
            </div>
            <!-- 로딩 중일 때 SkeletonSubContent 표시 -->
            <div v-if="loading === 'pending'" class="w-full grid grid-cols-4 gap-y-20 gap-x-6">
                <SkeletonSubContent />
                <SkeletonSubContent />
                <SkeletonSubContent />
                <SkeletonSubContent />
            </div>
            <div v-else class="w-full grid grid-cols-4 gap-y-20 gap-x-6">
                <SubContent v-for="article in displayedArticles" :data="article" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import axios from "axios";
/** 커스텀 컴포넌트 */
import AppBanner from "@/components/common/AppBanner.vue";
import MainContent from "@/components/common/MainContent.vue";
import SubContent from "~/components/common/SubContent.vue";
import SkeletonMainContent from "@/components/common/skeleton/SkeletonMainContent.vue";
import SkeletonSubContent from "@/components/common/skeleton/SkeletonSubContent.vue";
/** Shadcn-vue 컴포넌트 */
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-vue-next";
/** 타입 Types */
import type { Article } from "~/types";

// useAsyncData를 사용하여 데이터를 비동기적으로 가져옵니다.
const { data: newsData, status: loading } = useAsyncData("news", async () => {
    const searchValue = "korea"; // 기본 검색어
    const API_KEY = "ce4c280c9dff4ac0a98c9d7ea869194d";
    const API_URL = `https://newsapi.org/v2/everything?q=${searchValue}&from=2025-02-02&sortBy=popularity&apiKey=${API_KEY}`;

    try {
        const response = await axios.get(API_URL);
        const articles = response.data.articles
            .map((article: Article) => {
                if (article.urlToImage !== null) return article;
            })
            .filter((article: Article) => article !== undefined);

        if (articles.length > 0) {
            return { mainArticle: articles[0], subArticles: articles.slice(1) };
        } else {
            return { mainArticle: null, subArticles: [] };
        }
    } catch (error) {
        throw error;
    }
});

// mainArticle과 subArticles를 newsData에서 가져옵니다.
const mainArticle = newsData.value?.mainArticle ?? null; // null 또는 undefined 처리
const subArticles = newsData.value?.subArticles ?? []; // 빈 배열로 기본값 처리

// "See All" 버튼 클릭 상태를 관리하는 변수
let showAll = ref(false);

// 기본적으로 표시할 서브 콘텐츠의 수
const maxDisplayedArticles = 8;

// 사용자가 "See All"을 클릭하면 모든 서브 콘텐츠를 표시하도록 처리
const toggleShowAll = () => {
    showAll.value = !showAll.value;
};

// showAll에 따라 표시할 서브 콘텐츠를 결정하는 computed 속성
const displayedArticles = computed(() => {
    if (showAll.value) {
        return subArticles; // 전체 기사 표시
    } else {
        return subArticles.slice(0, maxDisplayedArticles); // 제한된 기사만 표시
    }
});
</script>
