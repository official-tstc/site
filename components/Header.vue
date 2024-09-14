<template>
    <header>
        <nav id="nav-bar">
            <a target="_blank" href="https://github.com/official-tstc">GITHUB</a>
            <input type="button" @click="navigateTo('main-products')" value="PRODUCTS">
            <input type="button" @click="navigateTo('about')" value="ABOUT US">
        </nav>

        <div id="top-bar"></div>
        <div id="arrow-bar"></div>
        <div id="arrow"></div>
        <div id="right-bar"></div>
        <div id="title-box"><h1>The Self Technology Company</h1></div>
    </header>
</template>


<script setup lang="ts">

    const navigateTo = (id: string) =>{
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }

</script>


<style scoped>
    header {
        width: 100vw;
        max-width: 100%;
        height: 100vh;
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-template-rows: repeat(12, 1fr);
        grid-gap: 0px;
    }

    h1 {
        font-weight: normal;
        margin-top: -25px;
        font-size: 90px;
    }

    #nav-bar,
    #top-bar,
    #arrow-bar {
        background-color: black;
        height: 20px;
    }

    #right-bar {
        background-color: #CCFF33;
        justify-self: right;
    }

    #arrow-bar,
    #arrow,
    #right-bar {
        width: 20px;
    }

    #arrow-bar {
        margin-top: -50px;
        height: 50px;
    }

    #arrow {
        width: 0;
        height: 0;
        border-left: 30px solid transparent;
        border-right: 30px solid transparent;
        border-bottom: 40px solid #CCFF33;
        rotate: 180deg;
        margin-left: -20px;
        margin-top: -70px;
    }

    #nav-bar{
        display: flex;
        align-items: center;
    }

    a,input{
        text-decoration: none;
        color: white;
        font-weight: bolder;
        background-color: transparent;
        border: 0;
        padding: 0;
        font-size: 13px;
        margin-left: 20px;
        cursor:pointer;
        transition: 0.5s;
    }

    a:hover,input:hover {
        color: #CCFF33;
    }

    @media screen and (max-width: 800px)  {
        h1 {
            margin: 0;
            font-size: 50px;
        }

        #arrow {
            margin-top: -75px;
        }
    }

    @media screen and (min-width: 800px) and (max-width: 1023px) {
        h1 {
            margin: 0;
            font-size: 60px;
        }

        #arrow-bar {
            margin-top: -80px;
        }

        #arrow {
            margin-top: -130px;
        }
    }

    #nav-bar { grid-area: 11 / 2 / 12 / 12; }
    #top-bar { grid-area: 2 / 2 / 3 / 12; }
    #arrow-bar { grid-area: 3 / 2 / 4 / 3; }
    #arrow { grid-area: 4 / 2 / 5 / 3; }
    #right-bar { grid-area: 3 / 11 / 10 / 12; }
    #title-box { grid-area: 5 / 2 / 10 / 11; }

</style>