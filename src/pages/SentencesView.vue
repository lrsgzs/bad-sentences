<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { useFetchData } from '@/utils';
import { computed, onMounted, ref, watch } from 'vue';
import type { Sentence } from '@/types/sentences.ts';
import Loading from '@/components/Loading.vue';

const route = useRoute();
const router = useRouter();
const pageNumber = computed(() => parseInt((route.params.pageNumber as string) ?? '1'));

const pageNumberRef = ref(pageNumber);

const [totalPagesData, loadTotalPagesData] = useFetchData<{ pages: number }>('./data.json');
const [pageData, loadPageData] = useFetchData<Sentence[]>(() => `./pages/${pageNumber.value}.json`);

const onClickCopy = async (sentence: Sentence) => {
    try {
        await navigator.clipboard.writeText(`${sentence.text}  ——${sentence.author}`);
        console.log('成功复制');
    } catch (err) {
        console.error('复制失败', err);
    }
};

watch(pageNumberRef, newPageNumber => {
    router.push({
        name: 'sentences',
        params: {
            pageNumber: newPageNumber,
        },
    });
});

watch(
    () => pageNumber,
    () => {
        loadPageData();
    },
);

onMounted(() => {
    loadTotalPagesData();
    loadPageData();
});
</script>

<template>
    <div class="flex flex-col gap-2">
        <v-container>
            <h1 style="font-size: 36px">第 {{ pageNumber }} 页</h1>
        </v-container>

        <v-divider />

        <v-container>
            <Loading v-if="!pageData.success" :error="pageData.error" />
            <div class="flex flex-col gap-2" v-else>
                <v-card v-for="sentence of pageData.data">
                    <template v-slot:text>
                        <div class="flex justify-between items-center gap-2">
                            <div class="flex items-baseline gap-2">
                                <h3 style="font-size: 16px">{{ sentence.text }}</h3>

                                <span class="text-neutral-700 dark:text-neutral-300" style="font-size: 14px">
                                    ——{{ sentence.author }}
                                </span>
                            </div>

                            <v-btn icon="mdi-content-copy" @click="onClickCopy(sentence)" v-tooltip:bottom="'复制'" />
                        </div>
                    </template>
                </v-card>
            </div>
        </v-container>

        <v-divider />

        <v-container>
            <v-pagination
                v-model="pageNumberRef"
                :length="totalPagesData.data?.pages ?? 0"
                rounded
                :total-visible="7"
            />
        </v-container>
    </div>
</template>

<style scoped></style>
