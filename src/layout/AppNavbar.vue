<script setup lang="ts"></script>

<template>
    <v-app-bar style="position: static" elevation="4">
        <div class="container mx-auto flex px-4 items-center">
            <router-link to="/" class="mr-2" style="font-size: 24px"> BadSentences </router-link>

            <div class="me-auto flex gap-2 items-center">
                <router-link v-slot="{ navigate, isActive }" to="/" custom>
                    <v-btn :active="isActive" @click="navigate"> 首页 </v-btn>
                </router-link>
            </div>
        </div>
    </v-app-bar>
</template>

<style scoped></style>
