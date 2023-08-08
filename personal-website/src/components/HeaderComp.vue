<template>
    <header>
        <div class="container">
            <div class="box-parent">
                <div class="box">
                    <h3 class="hello">سلام</h3>
                    <h3 class="my-name">من نجمه خرمی شاد هستم</h3>
                    <div class="typing">
                        <h5 class="desc">برنامه نویس و توسعه دهنده وب</h5>
                    </div>
                    <div class="btn-box">
                        <button>رزومه<span class="char">&#8592;</span></button>
                        <button>مشاهده نمونه کارها<span class="char">&#8592;</span></button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                navItems: ['خانه','درباره من','مهارت ها','نمونه کارها','تماس با من']
            }
        }
    }
</script>

<style scoped>
    header {
        height: 100vh;
        min-height: 700px;
        display: block;
        background: url(../assets/emile-perron.jpg) no-repeat left center;
        background-size: cover;
        position: relative;
    }
    header::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background-color: rgba(0,0,0,.25);
    }
    .box-parent {
        margin-top: 18vh;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .box {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        z-index: 1;
        color: #fff;
        padding: 20px;
    }
    .box * {
        padding: 5px 0;
    }
    .hello {
        position: relative;
        font-size: 1.2rem;
        font-weight: 500;
        padding: 4px 8px;
        background-color: #fff;
        color: #333;
        border-radius: 5px;
    }
    .hello::after {
        content: " ";
        position: absolute;
        top: 100%;
        right: 50%;
        transform: translateX(50%);
        border-width: 5px;
        border-style: solid;
        border-color: #fff transparent transparent transparent;
    }
    .my-name {
        font-size: 3rem;
        color: var(--primary-light);
    }
    @keyframes typing {
        from { width: 0; }
	    to { width: 100% }
    }
    .typing {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .typing::after {
        content: "|";
        font-size: 2.5rem;
        padding-right: 5px;
    }
    .desc {
        font-size: 2rem;
        font-weight: 500;
        position: relative;
        animation: typing 2s steps(22) forwards;
        overflow: hidden;
        white-space: nowrap;
    }
    .btn-box {
        margin-top: 30px;
    }
    .btn-box button {
        font-size: 1.3rem;
        padding: 12px 25px;
        border-radius: 5px;
        border: none;
        background-color: var(--primary-dark);
        box-shadow: 0 0.5rem 1rem rgba(255, 255, 255, 0.15);
        cursor: pointer;
        transition: all .3s ease-in-out .1s;
        font-weight: 900;
        color: #fff;
    }
    .btn-box button:hover {
        box-shadow: 0 0.5rem 1rem rgba(255, 255, 255, 0.25);
        padding-left: 30px;
    }

    .btn-box button:nth-child(1) {
        margin-left: 2vw;
        background-color: #fff;
        color: var(--primary-dark);
    }
    .char {
        padding-right: 10px;
        transition: all .3s ease-in-out .1s;
        display: inline-block;
    }
    .btn-box button:hover .char {
        transform: translateX(-10px);
    }
</style>
