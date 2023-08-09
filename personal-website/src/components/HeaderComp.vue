<template>
    <header id="home">
        <div class="container">
            <div class="box-parent">
                <div class="box">
                    <h3 class="hello">سلام</h3>
                    <h3 class="my-name">من نجمه خرمی شاد هستم</h3>
                    <div class="typing">
                        <h5 class="desc">برنامه نویس و توسعه دهنده وب</h5>
                    </div>
                    <div class="btn-box">
                        <a href="./src/assets/resume-new.pdf" download="resume.pdf">رزومه<span class="char">&#8592;</span></a>
                        <a href="#portfolid">مشاهده نمونه کارها<span class="char">&#8592;</span></a>
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
        margin-top: 30vh;
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
        text-align: start;
        white-space: nowrap;
    }
    @keyframes typing {
        from { width: 0; }
	    to { width: 100% }
    }
    @keyframes blink {
        from{color: transparent;}
        to{color: #fff;}
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
        animation: blink .7s infinite;
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
        display: flex;
        align-items: center;
    }
    .btn-box a {
        font-size: 1.3rem;
        padding: 12px 25px;
        border-radius: 5px;
        border: none;
        background-color: var(--primary-dark);
        box-shadow: 0 0.5rem 1rem rgba(255, 255, 255, 0.15);
        transition: all .3s ease-in-out .1s;
        font-weight: 900;
        color: #fff;
        text-decoration: none;
        white-space: nowrap;
    }
    .btn-box a:hover {
        box-shadow: 0 0.5rem 1rem rgba(255, 255, 255, 0.25);
        padding-left: 30px;
    }

    .btn-box a:nth-of-type(1) {
        margin-left: 2vw;
        background-color: #fff;
        color: var(--primary-dark);
    }
    .char {
        padding-right: 10px;
        transition: all .3s ease-in-out .1s;
        display: inline-block;
    }
    .btn-box a:hover .char {
        transform: translateX(-10px);
    }

    /* media queries */
    @media only screen and (max-width: 992px) {
        .container {
            padding: 30px 0;
        }
        .btn-box {
            flex-direction: column;
            align-items: flex-start;
        }
        .btn-box a {
            margin-bottom: 10px;
            width: 100%;
        }
        .box-parent {
            justify-content: center;
        }
    }

    @media only screen and (max-width: 777px) {
        .box {
            width: 60%;
        }
        .hello {
            font-size: 1rem;
        }
        .my-name {
            font-size: 2.5rem;
        }
        .desc {
            font-size: 1.5rem;
        }
    }
    
    @media only screen and (max-width: 600px) {
        .box-parent {
            margin-top: 25vh;
        }
        .box {
            width: 80% !important;
            padding: 20px;
        }
        .my-name {
            font-size: 2rem;
            white-space: normal;
        }
        .desc {
            font-size: 1rem;
        }
        .btn-box a {
            font-size: 1rem;
            padding: 10px 15px;
        }
    }
</style>
