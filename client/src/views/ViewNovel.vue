<script setup>

import useNovel from "../composables/novelsAPIs";

const { novelByIdData, error, getNovelById } = useNovel();

</script>

<template>
    <div class="bg-blue-400">
        <h1>{{ novelByIdData }}</h1>
    </div>
</template>
