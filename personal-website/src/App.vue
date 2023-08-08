<template>
  <nav>
    <div class="container">
      <ul class="navigation">
        <li v-for="item in navItems" :key="item" @click="fixActiveClass">
          <a href="#">{{ item }}</a>    
        </li>
      </ul>
      <div>
        <span class="logo-span">NK</span>
      </div>
    </div>
  </nav>
  <header-comp/>
  <portfolid/>
  <main>
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
        navItems: ['خانه','درباره من','مهارت ها','نمونه کارها','تماس با من']
      }
    }
  }

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
  main {
    height: 100vh;
    min-height: 700px;
    background: url(./assets/nate-grant.jpg) no-repeat left center;
    background-size: cover;
    background-attachment: fixed;
  }
  .box-parent {
    display: flex;
    height: 100%;
  }
  .box {
    width: 50%;
    padding: 30px;
  }
  .box-fill {
    margin: 10vw;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
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
  }
  button:hover{
    box-shadow: 0 0 .7rem rgba(255, 255, 255, 0.35);
  }
  .comp-container {
    min-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
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
  .scrolled .nav-container .navigation li a:hover {
    background-color: var(--primary-light);
    color: #fff;
  }
  .nav-container {
    padding: 0 15vw;
  }
  .logo-span {
    font-size: 1.5rem;
    font-weight: 900;
    padding: 10px 15px;
    position: relative;
    color: #fff;
  }
  .logo-span::before {
    content: " ";
    width: 20px;
    height: 20px;
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
    width: 20px;
    height: 20px;
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

 

</style>
