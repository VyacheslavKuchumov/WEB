<template>
    <div>
        <form @submit.prevent="createPost" class="post-create-form">
            <input type="text"
                class="post-create-input-title" 
                placeholder="enter subject"
                required
                v-model="title">
            <textarea type="text"
                class="post-create-input" 
                placeholder="enter text" 
                required
                v-model="body"
            ></textarea> 
            <button class="post-create-button" type="submit" >create post</button>
        </form>
    </div>
</template>
<script>
export default {
    name: "post-create",
    data(){
        return {
            title: "",
            body: ""
        }
    },
    methods:{
        createPost(){
            const post = {
                title: this.title,
                body: this.body
            }
            this.$emit('create', post)
        }
    }
}
</script>
<style>
    .post-create-form{
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        width: 40%;
        margin: auto;
    }
    .post-create-input{
        resize: none;
        height: 150px;
        border: 2px solid black;
    }
    .post-create-input-title{
        border: 2px solid black;
    }
    .post-create-button{
        margin: auto;
        width: 40%;
        height: 30px;
        background-color: aquamarine;
    }

</style>