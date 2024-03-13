<script setup>
defineProps({
    name: String
})
</script>

<template>
    <div class="menu-item">
        <a href="#">{{ $t(name) }}</a>
    </div> 
</template>

<style scoped>
    .menu-item {
        display: flex;
    }

    a {
        text-decoration: none;
        color: black;
    }
</style>