<script setup lang="ts"></script>

<template>
    <div class="flex flex-col gap-2">
        <v-container>
            <h1 style="font-size: 36px">欢迎来到 BadSentences</h1>
            <p>Return to the First Time. In memory of the old days!</p>
            <p class="italic">什么是 BadSentences？也许，这个 Repo 更像是一个 Hitokoto？</p>
            <del>BadSentences 译名：劣句。。。？已无处查证。</del>
        </v-container>

        <v-divider />

        <v-container>
            <router-link v-slot="{ navigate, isActive }" to="/sentences" custom>
                <v-btn :active="isActive" @click="navigate" append-icon="mdi-arrow-right"> 查看句子 </v-btn>
            </router-link>
        </v-container>
    </div>
</template>

<style scoped></style>
