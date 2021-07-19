<template>
  <main>
    <h1>Ошибка с кодом {{ error.statusCode }}</h1>
    <nuxt-link to="/">Перейти на главную страницу.</nuxt-link>
  </main>
</template>

<script>
export default {
  // Шаблон страницы с ошибкой.
  props: ["error"],
  layout: "default",
};
</script>
