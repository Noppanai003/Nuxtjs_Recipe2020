<template>
  <header>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">หน้าหลัก</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/recipes">สูตรอาหาร</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">เกี่ยวกับ</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #521751;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 10px;
}

a {
    text-decoration: none;
    color: white;
}
</style>