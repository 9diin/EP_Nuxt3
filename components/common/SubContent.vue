<template>
    <div class="w-full flex flex-col gap-4">
        <div v-if="data?.urlToImage" class="w-full h-44 rounded-lg">
            <img :src="data?.urlToImage" alt="" class="w-full h-full rounded-lg object-cover" />
        </div>
        <div class="w-full flex flex-col gap-4">
            <div class="flex items-center gap-2">
                <div class="flex items-center justify-center h-10 w-10 min-w-10 rounded-full bg-neutral-100">
                    <User class="h-5 w-5 text-neutral-400" />
                </div>
                <span class="text-sm">{{ data?.author ? data.author : "알 수 없음" }}</span>
            </div>
            <div class="w-full h-14">
                <h1 class="scroll-m-20 text-xl font-extrabold tracking-tight line-clamp-2">{{ data?.title }}</h1>
            </div>
            <div class="w-full h-[64px]">
                <p class="scroll-m-20 text-sm text-neutral-700 tracking-tight line-clamp-3">{{ data?.description }}</p>
            </div>
            <div class="flex items-center gap-2">
                <Badge variant="outline">{{ data?.source.name ? data.source.name : "카테고리" }}</Badge>
                &middot;
                <span class="text-sm">{{ dayjs(data?.publishedAt).format("YYYY-MM-DD") }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import type { Article } from "@/types";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-vue-next";

interface Props {
    data: Article | null;
}

const props = defineProps<Props>();
const { data } = toRefs(props);
</script>
