import { defineStore } from "pinia";
import type { Article } from "@/types";
import axios from "axios";

export const useStore = defineStore("store", () => {
    // State
    const searchValue = ref<string>("korea");
    const mainArticle = ref<Article>();
    const subArticles = ref<Article[]>([]);

    // Actions
    // Mutations => State를 변경할 목적으로 작성된 코드
    const changeSearchValue = (payload: string) => {
        searchValue.value = payload;
    };
    // News API 호출
    const getNews = async () => {
        const API_KEY = "ce4c280c9dff4ac0a98c9d7ea869194d";
        const API_URL = `https://newsapi.org/v2/everything?q=${searchValue.value}&from=2024-12-31&sortBy=popularity&apiKey=${API_KEY}`;

        try {
            const response = await axios.get(API_URL);
            const articles = response.data.articles;

            console.log(articles);

            // 첫 번째 기사를 mainArticle에 설정
            mainArticle.value = articles[0] || null;

            // 나머지 기사를 subArticles에 설정
            subArticles.value = articles.slice(1);
        } catch (error) {
            throw error;
        }
    };

    return { searchValue, mainArticle, subArticles, changeSearchValue, getNews };
});
