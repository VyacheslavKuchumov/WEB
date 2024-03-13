<template>
    <div class="post-item">
        <div class="post-item-title">
            {{ title }}
        </div>
        <div class="post-item-body">
            {{ body }}
        </div>
        
    </div>
</template>
<script>
export default {
    name:"post-item",
    props:{
        title:{
            type: String,
            required: true
        },
        body:{
            type: String,
            required: true
        }
    }

    
}
</script>
<style>

.post-item{
    background-color: beige;
    border: 2px solid black;
    border-radius: 5px;
    margin: 20px;
    width: 40%;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.post-item-title{
    padding: 10px;
    font-weight: bold;
    font-size: 2em;
    
}

.post-item-body{
    
    padding: 20px;
    width: 70%;
    word-wrap: break-word;
    text-align: justify;
    margin: auto;
}
    
</style>