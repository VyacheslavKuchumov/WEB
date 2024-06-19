<template>
    <button class="btn">
        <slot>

        </slot>
    </button>
</template>
<script>
export default {
    name: 'my-button'
}
</script>
<style scoped>
    .btn{
        color: black;
        padding: 10px;
        cursor: pointer;
        background-color: white;
        border: 1px solid black;
        border-radius: 8px;
        justify-content: center;
    }
    
</style>