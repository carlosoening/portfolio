<script setup>
import MenuItem from './MenuItem.vue'
</script>

<template>
    <div class="wrapper">
        <div class="menu">
        <MenuItem name="menu.about"/>
        <MenuItem name="menu.projects"/>
        <MenuItem name="menu.contact"/>
        <div>
            <button @click="changeLocale('pt_BR')">PT</button>
            <button @click="changeLocale('en')">EN</button>
        </div>
    </div>
    </div> 
</template>

<style scoped>
    .wrapper {
        display: grid;
        grid-template-columns: 80%;
        justify-content: center;
    }
            
    .menu {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        height: 50px;
        gap: 20px;
    }
</style>

<script>
export default {
    methods: {
        changeLocale(locale) {
            this.$i18n.locale = locale
        }
    }
}
</script>