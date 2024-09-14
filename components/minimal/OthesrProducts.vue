<template>
    <div id="others-products">
        <MinimalCard 
            :title="`focus`"
            :content="`focus description text test example to design`"
            :color="`#FFF`"
            :background="`#000`"
        />

        <MinimalCard 
            :title="`focus`"
            :content="`focus description text test example to design`"
            :color="`#FFF`"
            :background="`#000`"
        />

        <MinimalCard 
            :title="`focus`"
            :content="`focus description text test example to design`"
            :color="`#FFF`"
            :background="`#000`"
        />
    </div>
</template>


<script setup lang="ts">

</script>


<style scoped>
    #others-products {
        margin: auto;
        width: 90vw;
        max-width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        gap: 50px;
    }

    @media screen and (min-width:1024px){
        #others-products {
            gap: 100px;
        }
    }
</style>