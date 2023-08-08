<template>
    <div class="experience">
        <h3>تجربه</h3>
        <div class="expert-item" v-for="item in expertItems">
            <div class="border"><div class="circle"></div></div>
            <h6>{{ item.title }}</h6>
            <span>{{ item.year }}</span>
            <p>{{ item.about }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                expertItems: [
                    {title:'توسعه دهنده فرانت اند' ,year:'1400-1401', about:'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'},
                    {title:'توسعه دهنده فرانت اند (vue)' ,year:'1402-تاکنون', about:' سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است'},
                ]
            }
        }
    }
</script>

<style scoped>
    .experience {
        padding: 60px;
        border-radius: 5px;
    }
    h3 {
        font-size: 2rem;
        padding-bottom: 30px;
        color: var(--primary-dark);
    }
    .expert-item {
        position: relative;
        padding-bottom: 40px;
    }
    .expert-item:last-of-type {
        padding-bottom: 0;
    }
    .border {
        position: absolute;
        width: 25px;
        height: 100%;
        top: 0;
        left: 100%;
        border-right: 2px solid var(--primary-dark);

    }
    .circle {
        width: 15px;
        height: 15px;
        background-color: var(--primary-dark);
        border-radius: 50%;
        position: absolute;
        top: 0;
        transform: translateX(50%);
    }
    h6 {
        font-size: 1.2rem;
        padding-bottom: 8px;
        font-weight: 900;
    }
    span {
        padding-bottom: 8px;
        display: inline-block;
        font-size: 14px;
        color: var(--gray-color);
    }
    p {
        font-size: 16px;
    }
</style>