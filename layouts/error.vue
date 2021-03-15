<template>
  <main>
    <h1>Шаблон клиентской ошибки с кодом {{ error.statusCode }}</h1>
    <nuxt-link to="/">Перейти на главную страницу.</nuxt-link>
  </main>
</template>

<script>
export default {
  props: ["error"],
  layout: "default",
};
</script>
