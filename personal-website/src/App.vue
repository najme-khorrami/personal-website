<template>
  <nav>
    <div class="container">
      <div class="menu-bar" @click="showMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
      <div class="nav-parent">  
        <ul class="navigation">
            <li v-for="item in navItems" :key="item.name" @click="fixActiveClass">
                <a :href="item.href">{{ item.name }}</a>    
            </li>
        </ul>
      </div>
      <div>
        <span class="logo-span">NK</span>
      </div>
    </div>
  </nav>
  <header-comp/>
  <portfolid/>
  <main>
    <div class="container">
      <div class="box-parent">
        <div class="box">
          <div class="btns">
            <button  type="button" :class="showComp=='about-comp' ? 'active' : ''" ref="btn1" @click="showComp = 'about-comp'">درباره من</button>
            <button type="button" :class="showComp=='skill-comp' ? 'active' : ''" ref="btn2" @click="showComp = 'skill-comp'">مهارت ها</button>
            <button type="button" :class="showComp=='exper-comp' ? 'active' : ''" ref="btn3" @click="showComp = 'exper-comp'">تجربه</button>
          </div>
        </div>
        <div class="box box-fill">
          <div class="comp-container">
            <component :is="showComp"></component>
          </div>
        </div>
    </div>
    </div>
  </main>
  <contact-comp/>
  <footer>
    <div class="container">
      <div>
        <span class="logo-span">NK</span>
      </div>
      <div class="footer-box">
        <div class="box">
          <a href="#"><img width="20" height="20" src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin-2--v1.png" alt="linkedin-2--v1"/></a>
        </div>
        <div class="box">
          <a href=""><img width="20" height="20" src="https://img.icons8.com/fluency-systems-filled/48/ffffff/telegram-app.png" alt="telegram-app"/></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    data() {
      return {
        showComp: 'about-comp',
        navItems: [
          {name:'خانه' ,href:'#home'},
          {name:'درباره من' ,href:'#about'},
          {name:'نمونه کارها' ,href:'#portfolid'},
          {name:'تماس با من' ,href:'#contact'}
        ]
      }
    },
    methods: {
        showMenu() {
            let navEl = document.querySelector(".nav-parent")
            let menuIco = document.querySelector(".menu-bar")
            if(navEl.id == '') {
                navEl.id = 'center'
                menuIco.classList.add('animate-act')
                menuIco.classList.remove('animate-deact')
            }
            else {
                navEl.id = ''
                menuIco.classList.remove('animate-act')
                menuIco.classList.add('animate-deact')
            }
        }
    }
  }

  // sticky navbar
  function myFunction() {
    if (document.documentElement.scrollTop > 50) {
      document.querySelector("nav").className = "scrolled";
      document.querySelector("nav > div").className = "nav-container";
    } else {
      document.querySelector("nav").className = "";
      document.querySelector("nav > div").className = "container";
    }
  }
  window.onscroll = function() {myFunction()};


</script>

<style scoped>
  main {
    height: 100vh;
    min-height: 700px;
    background: url(./assets/nate-grant.jpg) no-repeat left center;
    background-size: cover;
    background-attachment: fixed;
  }
  main .container {
    height: 100%;
    padding: 30px 50px;
    text-align: start;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .menu-bar {
    width: 50px;
    height: 50px;
    padding: 5px;
    display: none;
    flex-direction: column;
    justify-content: space-evenly;
    cursor: pointer;
    z-index: 11;
  }
  .menu-bar span {
    width: 100%;
    background-color: var(--primary-light);
    height: 5px;
    display: block;
    border-radius: 8px;
  }
  .box-parent {
    display: flex;
    height: 100%;
    width: 100%;
  }
  .box {
    width: 50%;
    padding: 30px;
  }
  .box-fill {
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  button {
    width: 150px;
    font-size: 1.3rem;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    margin: 10px;
    cursor: pointer;
    box-shadow: 0 0 .5rem rgba(255, 255, 255, 0.25);
    color: var(--primary-dark);
    white-space: nowrap;
  }
  button:hover{
    box-shadow: 0 0 .7rem rgba(255, 255, 255, 0.35);
  }
  .comp-container {
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: #fff; */
    border-radius: 5px;
  }
  button.active {
    position: relative;
    background-color: var(--primary-dark);
    color: #fff;
  }
  button.active::after {
    content: " ";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 100%; 
    border-width: 8px;
    border-style: solid;
    border-color: transparent var(--primary-dark) transparent transparent;
  }
  nav {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 99;
    background: transparent;
    float: right;
    transition: all .5s;
  }
  nav > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navigation {
    display: flex;
    list-style-type: none;
  }
  .navigation li a{
    display: inline-block;
    padding: 10px 20px;
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: bold;
    color: rgba(255,255,255,.85);
    margin-left: 2px;
  }
  .navigation li a:hover {
    color: rgba(255,255,255,1);
    text-shadow: 2px 2px 5px rgba(255,255,255,.5);
  }
  .scrolled {
    background-color: #fff;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .25);
  }
  .scrolled .nav-container .navigation li a {
    color: var(--primary-dark);
    padding: 20px 20px;
    position: relative;
  }
  .scrolled .nav-container #center .navigation li a:hover {
    background-color: var(--primary-light);
    color: #fff;
  }
  .nav-container {
    padding: 0 15vw;
  }
  .logo-span {
    font-size: 1.5rem;
    font-weight: 900;
    padding: 5px 10px;
    position: relative;
    color: #fff;
  }
  .logo-span::before {
    content: " ";
    width: 15px;
    height: 15px;
    border-radius: 5px;
    border: 5px solid var(--primary-dark);
    border-left-color: transparent;
    border-bottom-color: transparent;
    position: absolute;
    top: 0;
    right: 0;
  }
  .logo-span::after {
    content: " ";
    width: 15px;
    height: 15px;
    border-radius: 5px;
    border: 5px solid var(--primary-dark);
    border-right-color: transparent;
    border-top-color: transparent;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .scrolled .nav-container .logo-span::after {
    border-left-color: var(--primary-light);
    border-bottom-color: var(--primary-light);
  }
  .scrolled .nav-container .logo-span::before {
    border-right-color: var(--primary-light);
    border-top-color: var(--primary-light);
  }
  .scrolled .nav-container .logo-span {
    color: var(--primary-dark);
  }
  footer {
    background-color: rgba(0, 0, 0, .15);
    text-align: center;
    padding: 20px 0;
  }
  footer .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .footer-box {
    display: flex;
    margin: 30px 0;
  }
  .footer-box .box {
    width: 30px;
    height: 30px;
    padding: 0;
    margin: 5px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .25);
  }
  .footer-box .box:hover {
    background-color: var(--primary-dark);
  }
  footer .logo-span {
    color: var(--primary-dark);
  }
  footer .logo-span::after {
    border-left-color: #fff;
    border-bottom-color: #fff;
  }
  footer .logo-span::before {
    border-right-color: #fff;
    border-top-color: #fff;
  }
  .animate-act span:nth-child(1){
    rotate: -45deg;
    transition: .5s;
    transform-origin: 75%;
  }
  .animate-act span:nth-child(2){
    display: none;
  }
  .animate-act span:nth-child(3){
    rotate: 45deg;
    transition: .5s;
    transform-origin: 75%; 
  }
  .animate-deact span:nth-child(1){
    rotate: 0;
    transition: .5s;
    transform-origin: 75%;
  }
  .animate-deact span:nth-child(2){
    display: inline-block;
  }
  .animate-deact span:nth-child(3){
    rotate: 0;
    transition: .5s;
    transform-origin: 75%; 
  }
  #center {
    transition: .5s;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .75);
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #center .navigation {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .scrolled #center .navigation li a {
    color: #fff;
    padding: 10px 20px;
  }

  /* media queries */  
  @media only screen and (max-width: 992px) {
    .menu-bar {
      display: flex;
    }
    .navigation {
      display: none;
    }
    .box-parent {
      flex-direction: column;
      align-items: center;
      margin: 0;
      padding: 0;
      width: 100%;
    }
    .box {
      width: 100%;
      padding: 20px;
    }
    .btns {
      flex-direction: row;
    }
    main .container {
      padding: 10px 0;
    }
    button.active::after {
    top: 100%;
    transform: translateX(50%);
    right: 50%; 
    border-width: 8px;
    border-color: var(--primary-dark) transparent transparent transparent;
    }
  }
  @media only screen and (max-width: 600px) {
    .comp-container {
      width: 90%;
    }
  }  
</style>
