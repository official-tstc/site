<template>
    <section id="about">
        <MinimalSectionTitle 
            :content="`about us`"
        />

        <h3>core business</h3>
        <p>Our primary focus is on developing software that operates locally, without an internet connection, 
            with no data collection or transmission, and with support for self-hosting.
        </p>

        <h3>value & mission</h3>
        <p>Our goal is to develop functional software with free versions that work well without collecting user data.
            The paid versions will be one-time purchases, with no subscriptions, and will not alter the service but
            simply enhance it, ensuring that the free version remains fully functional and not limited.
        </p>

        <h3>foundation</h3>
        <p>Founded on August 10, 2024, in Brazil by <a target="_blank" href="https://github.com/georgejrdev">George Júnior</a></p>
    </section>
</template>


<script setup lang="ts">

</script>


<style scoped>
    section{
        margin:auto;
        width: 90vw;
    }

    h3 {
        margin-top: 5vh;
        font-size: 32px;
        font-weight: 250;
    }
    
    p {
        margin-top: 2vh;
        font-weight: 250;
    }
</style>