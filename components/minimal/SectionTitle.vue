<template>
    <h2>{{ content }}</h2>
</template>


<script setup lang="ts">
    interface Props {
        content: string
    }

    const props = defineProps<Props>()
</script>


<style scoped>
    h2{
        margin: auto;
        width: 90vw;
        text-align: center;
        font-weight: 300;
        margin-top: 15vh;
        margin-bottom: 10vh;
        font-size: 48px;
    }

    @media screen and (min-width:1024px)  {
        h2{
            font-size: 64px;
        }
    }
</style>