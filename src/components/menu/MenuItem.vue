<script setup>
defineProps({
    name: String
})
</script>

<template>
    <div class="menu-item">
        <a href="#">{{ name }}</a>
    </div> 
</template>

<style scoped>
    .menu-item {
        display: flex;
    }
</style>