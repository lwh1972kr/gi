<template>
  <header>
    <div id="nav" class="menu-wrap">
 <router-link to="/">Home</router-link>
 <router-link to="/about">about</router-link>
 <router-link to="/planModule">planModule</router-link>
 <router-link to="/planModuleRealGrid">planModuleRealGrid</router-link>
    </div>
  </header>
  <main>
    <slot></slot>
  </main>
  <footer>© 2022 onda2me by global component</footer>
</template>

<script setup lang="ts">

</script>
<style>
/* 헤더 - 높이, 색상 */
header {
  background-color: rgb(60, 60, 60);
  height: 30px;
}
header li {
  height: 30px;
  line-height: 30px;
}

/* 정렬 - 하위메뉴 들여쓰기 */
header li a {
  padding-left: 20px;
  text-decoration: none;
  color: #e5e5e5;
  display: block;
  padding: 0px 10px 0px 10px;
}

/* 색상 */
.menu-wrap > ul > li {
  float: left;
  background-color: rgb(60, 60, 60);
}
.main-menu:hover {
  background-color: #585858;
  color: white;
}
.main-menu li {
  background-color: rgb(36, 36, 36);
}
.main-menu li > a:hover {
  background-color: #2a1a86;
  color: white;
}

/* 1단 */
.menu-wrap li.main-menu > ul {
  display: none;
  position: absolute;
  z-index: 200;
}
.menu-wrap li.main-menu:hover > ul {
  display: block;
}
.menu-wrap li.main-menu ul li > a {
  padding: 0 30px 0 30px;
}

/* 2단 - 하위메뉴 접었다 펴기 */
.menu-wrap li.sub-menu-1 ul {
  display: none;
  height: auto;
  padding: 0;
  margin: 0px;
  border: 0px;
  position: absolute;
  z-index: 200;
}
.menu-wrap li.sub-menu-1:hover > ul {
  display: block;
}

/* 2단 - 화살표 위치 */
.menu-wrap li.sub-menu-1 > a {
  position: relative;
}
.menu-wrap li.sub-menu-1 > a span.gt {
  position: absolute;
  right: 5px;
}

/* 3단 - 하위메뉴 접었다 펴기 */
li.sub-menu-2 {
  position: relative;
}
li.sub-menu-2 ul {
  position: absolute;
  display: none;
  top: 0px;
  left: 100%;
  width: 180px;
  background-color: rgb(36, 36, 36);
}
li.sub-menu-2:hover ul {
  display: block;
}
</style>