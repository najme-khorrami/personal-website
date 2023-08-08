<template>
    <div class="portfolid">
        <div class="container">
            <h3>نمونه کارها</h3>
            <span>پروژه های من</span>
                <div class="pro-container" @scroll="show">
                    <TransitionGroup appear>
                        <div class="project-item" @mouseover="item.hover = true" @mouseleave="item.hover = false" v-for="item in projectItems" :style="{ backgroundImage: 'url(' + item.img + ')' }" :key="item.title">
                            <span v-if="item.hover">{{ item.title }}</span>
                            <a :href="item.url" target="_blank"></a>
                        </div>
                    </TransitionGroup>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                projectItems: [
                    {title:'نمونه سایت خبری' ,url:'https://github.com/najme-khorrami/foxs-news.git' ,img:'./../src/assets/foxnews.png', hover:false},
                    {title:'مستعان' ,url:'https://github.com/najme-khorrami/mostaan.git' ,img:'./../src/assets/mostaan.png', hover:false},
                    {title:'نمونه سایت فروشگاهی' ,url:'https://github.com/najme-khorrami/online-store.git' ,img:'./../src/assets/online-store.png', hover:false},
                    {title:'نمونه سایت فروشگاهی' ,url:'https://github.com/najme-khorrami/sample.git' ,img:'./../src/assets/sample.png', hover:false},
                    {title:'سایت کندو' ,url:'https://github.com/najme-khorrami/kandooo.git' ,img:'./../src/assets/kandoo.png', hover:false},
                    {title:'نمونه سایت تبلیغاتی' ,url:'https://github.com/najme-khorrami/exp-tailwind.git' ,img:'./../src/assets/exp-tailwind.png', hover:false}
                ]
            }
        }
    }
</script>

<style scoped>
.v-enter-active {
    animation: load 1s;
}
@keyframes load {
    from{rotate: 0 1 0 60deg;}
    to{rotate: 0deg;}
}

    .portfolid {
        height: 100vh;
        min-height: 700px;
    }
    h3 {
        text-align: center;
        font-size: 2.5rem;
        margin-top: 30px;
        color: var(--primary-dark);
    }
    span {
        font-size: 1.2rem;
        color: var(--gray-color);
    }
    .pro-container {
        margin: 60px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .project-item {
        width: calc(33.33% - 60px);
        height: 200px;
        background-repeat: no-repeat;
        background-position: top center;
        background-size: cover;
        border-radius: 5px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        margin: 20px 0;
        overflow: hidden;
    }
    .project-item::after {
        content: "";
        width: 100%;
        height: 100%;
        background-color: var(--primary-dark);
        filter: opacity(70%);
        position: absolute;
        top: 0;
        right: 0;
        opacity: 0;
        transition: all .5s;
    }
    .project-item:hover::after {
        opacity: 1;
    }
    .project-item span {
        font-size: 26px;
        color: #fff;
        font-weight: 900;
        z-index: 1;
    }
    .project-item a {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
    }
</style>