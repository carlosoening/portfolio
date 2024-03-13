<template>
    <div class="wrapper">
        <div class="presentation">
        <div class="left">
            <span class="greeting">{{ $t('presentation.greeting') }}</span>
            <span>{{ $t('presentation.me') }}</span>
        </div>
        <div class="right">
            foto
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

    .presentation {
        display: grid;
        grid-template-columns: 70% 30%;
        margin: 80px 0 50px 0;
    }

    .left {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .right {
        display: flex;
    }

    .greeting {
        font-size: 3.75rem;
        font-weight: bold;
    }
</style>