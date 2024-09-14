<template>
    <div @click="toLink(link)" :style="`background: ${background}`">
        <h4 :style="`color: ${color}`">{{title}}</h4>
        <p :style="`color: ${color}`">{{ content }}</p>
    </div>
</template>


<script setup lang="ts">

    interface Props{
        title:string
        content:string
        background:string
        color:string
        link:string
    }

    const props = defineProps<Props>()

    const toLink = (link:string) => {
        window.open(link, '_blank')
    }

</script>


<style scoped>
    div {
        padding-top: 25px;
        max-width: 250px;
        height: 250px;
        cursor: pointer;
    }

    h4 {
        font-size: 24px;
        font-weight: normal;
    }
    
    p {
        margin-top: 25px;
        font-size: 18px;
        font-weight: 300;
    }

    h4,p{
        margin-left: 25px;
        margin-right: 25px;
    }

    @media screen and (min-width:1024px) {
        div {
            max-width: 275px;
        }
    }
</style>