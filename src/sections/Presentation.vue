<template>
    <div class="wrapper padding-vertical-80">
        <div class="presentation">
        <div class="left">
            <span class="greeting">{{ $t('presentation.greeting') }}</span>
            <span>{{ $t('presentation.me') }}</span>
        </div>
        <div class="right">
            <img class="foto" src="../assets/foto1.jpg" alt="Foto 1">
            <div class="bg-foto"></div>
        </div>
    </div>
    </div>
</template>

<style scoped>
    .presentation {
        display: grid;
        grid-template-columns: 70% 30%;
        padding-bottom: 40px;
    }

    .left {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .right {
        display: flex;
        justify-content: flex-end;
    }

    .greeting {
        font-size: 3.75rem;
        font-weight: bold;
    }

    .foto {
        max-width: 250px;
        margin-right: 40px;
        border-bottom: white 8px solid;
        border-right: white 8px solid;
    }

    .bg-foto {
        width: 258px;
        height: 258px;
        background-color: #E4E7EB;
        position: absolute;
        z-index: -1;
        margin-top: 40px;
        margin-left: 30px;
    }

    @media (max-width: 900px) {
        .presentation {
            display: flex;
            flex-direction: column-reverse;
            margin: 80px 0 50px 0;
        }

        .left {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }

        .right {
            margin-bottom: 80px;
            display: flex;
            justify-content: center;
        }

        .greeting {
            font-size: 2.50rem;
        }   

        .foto {
            max-width: 250px;
            margin: 0;
            border-bottom: white 8px solid;
            border-left: white 8px solid;
            border-right: white 8px solid;
        }

        .bg-foto {
            width: 300px;
            height: 258px;
            background-color: #E4E7EB;
            position: absolute;
            z-index: -2;
            margin-top: 20px;
            margin-left: 0;
        }
    }
</style>