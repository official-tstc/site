<template>
    <section id="main-products">
        <MinimalCard 
            title="focus"
            content="focus on what really matters in your life"
            color="#FFF"
            background="#838383"
            link="https://github.com/official-tstc/focus"
        />
    </section>
</template>


<script setup lang="ts">

</script>


<style scoped>
    #main-products {
        margin: auto;
        width: 90vw;
        max-width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 50px;
        padding-top: 50px;
        padding-bottom: 50px;
    }

    @media screen and (min-width:1024px){
        #main-products {
            gap: 100px;
        }
    }
</style>