<script setup>
defineProps({
    name: String
})
</script>

<template>
    <div class="chip">{{ $t(name) }}</div>
</template>

<style scoped>
    .chip {
        padding: 8px 14px 8px 14px;
        width: fit-content;
        background-color: #E4E7EB;
        font-size: 15px;
        border-radius: 12px;
        color: rgb(75 85 99);
        font-weight: 500;
    }
</style>