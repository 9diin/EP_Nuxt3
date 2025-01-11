<template>
    <div class="w-full flex items-center gap-6">
        <div v-if="data?.urlToImage" class="w-1/3 h-full rounded-lg">
            <img :src="data?.urlToImage" alt="" class="h-full rounded-lg object-cover" />
        </div>
        <Skeleton v-else class="w-1/3 h-[298px] rounded-lg" />
        <div class="w-2/3 flex flex-col gap-6">
            <div class="flex items-center gap-2">
                <div class="flex items-center justify-center h-10 w-10 rounded-full bg-neutral-100">
                    <User class="h-5 w-5 text-neutral-400" />
                </div>
                <span>{{ data?.author ? data.author : "알 수 없음" }}</span>
                &middot;
                <span>{{ dayjs(data?.publishedAt).format("YYYY-MM-DD HH:mm:ss") }}</span>
            </div>
            <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight line-clamp-2">{{ data?.title }}</h1>
            <div class="w-full h-[84px]">
                <h4 class="scroll-m-20 text-xl font-medium tracking-tight line-clamp-3">{{ data?.description }}</h4>
            </div>
            <div class="flex items-center gap-2">
                <Newspaper class="h-5 w-5 text-neutral-400" />
                <Badge variant="outline">{{ data?.source.name ? data.source.name : "카테고리" }}</Badge>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
import type { Article } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Newspaper, User } from "lucide-vue-next";

interface Props {
    data: Article | null;
}

const props = defineProps<Props>();
const { data } = toRefs(props);
</script>
