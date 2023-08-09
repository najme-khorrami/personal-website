<template>
    <div class="contact" id="contact">
        <div class="container">
            <h3>تماس با من</h3>
            <div class="contact-container">
                <div class="contact-item" v-for="item in contactItems">
                    <img :src="item.icon" alt="">
                    <a :href="item.href" target="_blank" dir="ltr">{{ item.info }}</a>
                </div>
            </div>
            <h6>راه ارتباطی سریع تر</h6>
            <form @submit.prevent="submit">
                <div class="row">
                    <input type="text" id="name" placeholder="نام">
                    <input type="email" id="email" placeholder="ایمیل">
                </div>
                <input type="text" id="topic" placeholder="عنوان">
                <textarea name="" id="message" cols="30" rows="10"></textarea>
                <div class="row">
                    <input type="submit" id="submit" value="ارسال">
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
                    {icon:'https://img.icons8.com/ios-filled/50/bb9bbb/apple-phone.png' ,href:'tel:+989210734504' ,info:'+989210734504'},
                    {icon:'https://img.icons8.com/ios-filled/50/bb9bbb/new-post.png' ,href:'mailto:n.khorrami8819@gmail.com' ,info:'n.khorrami8819@gmail.com'},
                    {icon:'https://img.icons8.com/ios-filled/50/bb9bbb/github.png' ,href:'https://github.com/najme-khorrami' ,info:'najme-khorrami'},
                    {icon:'https://img.icons8.com/ios-filled/50/bb9bbb/linkedin.png' ,href:'https://www.linkedin.com/in/najme-khorramishad-bb3773277' ,info:'najme-khorramishad'}
                ]
            }
        },
        methods: {
            submit() {
                alert("mes")
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
    .contact-item a {
        text-decoration: none;
        color: #333;
        font-size: 1.2rem;
    }
    .contact-item a:hover {
        text-shadow: 1px 1px 2px #9c9c9c;
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
    #submit {
        width: auto;
        display: inline-block;
        background-color: var(--primary-dark);
        color: #fff;
        cursor: pointer;
        transition: .2s;
    }
    #submit:hover {
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0, 0.25);
    }

    /* media queries */

    @media only screen and (max-width: 992px) {
        .contact-container {
            margin: 60px 0 40px 0;
            flex-wrap: wrap;
        }
        .contact-item {
            width: calc(50% - 30px);
            margin-bottom: 30px;
            margin: 10px;
        }
    }

    @media only screen and (max-width: 600px) {
        .contact-item {
            width: 90%;
        }
        .row {
            flex-direction: column;
            justify-content: flex-start;
        }
        .row input {
            width: 100%;
        }
        input, textarea {
            width: 100%;
            font-size: 18px;
        }
        #submit {
            width: fit-content;
        }
    }
</style>