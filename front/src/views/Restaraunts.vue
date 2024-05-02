<template>
    <div class="home">
        sus
    </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    name: 'register',
    data() {
        return {
            email: '',
            password: '',
            name: ''
        }
    },
    methods: {
        ...mapActions({
            register: 'auth/register'
        }),
        go_register() {
            const formData = {
                email: this.email,
                password: this.password,
                name: this.name
            }
            this.register(formData)
        }

    }
}
</script>
<style>
.home {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100svh;
    justify-content: center;
    align-items: center;
}

form {
    display: flex;
    padding: 20px;
    flex-direction: column;
    width: 400px;
    row-gap: 20px;
}
</style>