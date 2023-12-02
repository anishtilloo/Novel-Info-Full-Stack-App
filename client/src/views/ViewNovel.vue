<script setup>

import useNovel from "../composables/novelsAPIs";

const { novelByIdData, error, getNovelById } = useNovel();

</script>

<template>
    <div>
        <h1>{{ novelByIdData.novelName }}</h1>
    </div>
</template>
