<template>
  <div>
    <TheHeader />
    <Nuxt />
  </div>
</template>

<script>
export default {
  head() {
    return {
      // Установка rel="canonical" на всех страницах шаблона.
      link: [{ rel: "canonical", href: `${process.env.baseUrl}${this.$route.path}` }],

      // Пример установки общих мета-тегов на страницах.
      meta: [{ hid: "og:url", property: "og:url", content: `${process.env.baseUrl}${this.$route.path}` }],
    };
  },
};
</script>
