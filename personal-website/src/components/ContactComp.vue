<template>
    <div class="contact">
        <div class="container">
            <h3>تماس با من</h3>
            <div class="contact-container">
                <div class="contact-item" v-for="item in contactItems">
                    <img :src="item.icon" alt="">
                    <span>{{ item.info }}</span>
                </div>
            </div>
            <h6>راه ارتباطی سریع تر</h6>
            <form @submit.prevent="submit">
                <div class="row">
                    <input type="text" placeholder="نام">
                    <input type="email" placeholder="ایمیل">
                </div>
                <input type="text" placeholder="عنوان">
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <div class="row">
                    <input type="submit" value="ارسال">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                contactItems: [
                    {icon:'https://img.icons8.com/ios-filled/50/bb9bbb/apple-phone.png' ,info:'+989210734504'},
                    {icon:'https://img.icons8.com/ios-filled/50/bb9bbb/new-post.png' ,info:'n.khorrami8819@gmail.com'},
                    {icon:'https://img.icons8.com/ios-filled/50/bb9bbb/github.png' ,info:'https://github.com/najme-khorrami'},
                    {icon:'https://img.icons8.com/ios-filled/50/bb9bbb/linkedin.png' ,info:'linkedin'}
                ]
            }
        },
        methods: {
            submit() {

            }
        }
    }
</script>

<style scoped>
    .container {
        margin-bottom: 70px;
    }
    h3 {
        text-align: center;
        font-size: 2rem;
        margin-top: 30px;
        color: var(--primary-dark);
    }
    .contact-container {
        margin: 60px 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .contact-item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img {
        margin-bottom: 10px;
    }
    h6 {
        font-size: 1.5rem;
        padding-bottom: 20px;
        color: var(--gray-color);
    }
    span {
        color: #333;
        font-size: 1.2rem;
    }
    form {
        display: flex;
        flex-direction: column;
    }
    .row {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .row input {
        width: 50%;
        margin: 10px;
    }
    input, textarea {
        font-size: 20px;
        padding: 8px 15px;
        border: none;
        border-radius: 8px;
        background-color: rgba(0, 0, 0, .05);
        margin: 10px;
        outline: none;
        color: var(--gray-color);
    }
    input[type="submit"] {
        width: auto;
        display: inline-block;
        background-color: var(--primary-dark);
        color: #fff;
        cursor: pointer;
        transition: .2s;
    }
    input[type="submit"]:hover {
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.25);
    }
</style>