<template>
    <div class="about-me">
        <h3>درباره من</h3>
        <p>دانشجوی رشته مهندسی کامپیوتر هستم  و درزمینه توسعه وب فعالیت میکنم. علاقه مند به یادگیری بیشتر هستم و مشتاقم در این مسیر تجربه های جدیدی بدست بیارم و مهارت هایم را افزایش بدهم.</p>
        <ul>
            <li v-for="item in tableItems">
                <span id="key">{{ item.key }}:</span>
                <span id="value">{{ item.value }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableItems: [
                    {key:'نام' ,value:'نجمه خرمی شاد'},
                    {key:'تولد' ,value:'1380'},
                    {key:'ایمیل' ,value:'n.khorrami8819@gmail.com'},
                    {key:'تلفن' ,value:'989210734504+'},
                    {key:'آدرس' ,value:'ایران، تهران'},
                ]
            }
        }
    }
</script>

<style scoped>
    .about-me {
        padding: 60px;
        border-radius: 5px;
    }
    h3 {
        font-size: 2rem;
        padding-bottom: 30px;
        color: var(--primary-dark);
    }
    p {
        font-size: 20px;
        padding-bottom: 30px;
        color: #333;
    }
    ul {
        list-style-type: none;
    }
    li {
        width: 100%;
        margin-bottom: 10px;
    }
    #key {
        width: 20%;
        display: inline-block;
        font-size: 20px;
        font-weight: 900;
        color: var(--primary-dark);
    }
    #value {
        width: 30%;
        display: inline-block;
        font-size: 20px;
        color: #333;
    }
</style>