<template>
    <div class="skill">
        <h3>مهارت ها</h3>
        <div class="skill-item" v-for="item in skillItems" dir="ltr">
            <h6>{{ item.name }}</h6>
            <div class="skill-progress">
                <div class="progress" :style="{width:item.percent + '%'}">
                    <span>{{ item.percent }}%</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                skillItems: [
                    {name:'HTML/CSS' ,percent:90},
                    {name:'JAVASCRIPT' ,percent:75},
                    {name:'BOOTSTRAP' ,percent:80},
                    {name:'TAILWIND CSS' ,percent:80},
                    {name:'GIT' ,percent:70},
                    {name:'SASS' ,percent:70},
                    {name:'VUE JS' ,percent:50}
                ]
            }
        }
    }
</script>

<style scoped>
    .skill {
        width: 90%;
        padding: 60px;
        border-radius: 5px;
    }
    h3 {
        font-size: 2rem;
        padding-bottom: 30px;
        color: var(--primary-dark);
    }
    h6 {
        font-size: 16px;
        padding-bottom: 5px;
    }
    .skill-item {
        padding-top: 15px;
        width: 100%;
    }
    .skill-progress {
        height: 12px;
        border-radius: 5px;
        background-color: rgba(181, 181, 181, 0.6);
    }
    .progress {
        height: 100%;
        background-color: var(--primary-dark);
        border-radius: 5px;
        position: relative;
    }
    .progress span{
        position: absolute;
        bottom: 100%;
        right: 0;
        padding-bottom: 5px;
        color: var(--primary-dark);
    }
</style>