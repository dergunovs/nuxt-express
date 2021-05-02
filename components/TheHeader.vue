<template functional>
  <header>
    <div>Шаблон Nuxt-Express</div>
    <nav>
      <nuxt-link to="/">Главная</nuxt-link>
      <nuxt-link to="/page">Список страниц</nuxt-link>
      <nuxt-link to="/page/create">Создать страницу</nuxt-link>
    </nav>
  </header>
</template>

<style>
header {
  display: flex;
  justify-content: space-between;
  background-color: #eee;
  padding: 20px;
}
</style>
