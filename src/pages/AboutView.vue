<script setup lang="ts">
const infos = [
    {
        type: '框架',
        lib: 'Vue',
    },
    {
        type: '路由库',
        lib: 'Vue Router',
    },
    {
        type: '原子库',
        lib: 'Tailwind CSS',
    },
    {
        type: 'UI 库',
        lib: 'Vuetify',
    },
    {
        type: '打包工具',
        lib: 'Rolldown-Vite',
    },
];
</script>

<template>
    <div class="flex flex-col gap-2">
        <v-container>
            <h1 style="font-size: 36px">关于 BadSentences</h1>
            <p>也没什么其实...？</p>
        </v-container>

        <v-divider />

        <v-container>
            <p>
                代码仓库：
                <a href="https://github.com/lrsgzs/bad-sentences">https://github.com/lrsgzs/bad-sentences</a>
            </p>
            <v-table>
                <thead>
                <tr>
                    <th>类型</th>
                    <th>使用的库</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="info in infos" :key="info.type">
                    <th>{{ info.type }}</th>
                    <th>{{ info.lib }}</th>
                </tr>
                </tbody>
            </v-table>
        </v-container>
    </div>
</template>

<style scoped></style>
