<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useTheme } from 'vuetify';
import AppLayout from '@/layout/AppLayout.vue';

const router = useRouter();

const isLoading = ref(false);
const theme = useTheme();

onMounted(() => {
    theme.change("system");
})

router.beforeEach((from, to, next) => {
    console.log('导航开始。');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    isLoading.value = true;
    next();
});

router.afterEach((to, from, failure) => {
    console.log('导航结束。');
    setTimeout(() => {
        isLoading.value = false;
    }, 500);
});
</script>

<template>
    <v-app>
        <router-view v-slot="{ Component }">
            <AppLayout>
                <transition name="fade" mode="out-in">
                    <component :is="Component" />
                </transition>
            </AppLayout>
        </router-view>

        <!-- 加载中提示 -->
        <v-progress-circular indeterminate :size="30" class="loading-tip" v-if="isLoading" />
    </v-app>
</template>

<style scoped>
.loading-tip {
    position: fixed;
    top: 5px;
    right: 5px;
    z-index: 10000;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}
</style>
