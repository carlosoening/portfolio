<script setup>
import MenuItem from './MenuItem.vue'
</script>

<template>
    <div class="menu">
        <MenuItem name="Sobre"/>
        <MenuItem name="Projetos"/>
        <MenuItem name="Contato"/>
    </div> 
</template>

<style scoped>
    .menu {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        height: 50px;
        gap: 20px;
        margin: 0 100px 0 100px
    }
</style>