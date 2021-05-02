<template>
  <main>
    <h1>Список страниц</h1>
    <ul>
      <li v-for="page in pages" :key="page.h1">
        <nuxt-link :to="`/page/${page.url}`">{{ page.h1 }}</nuxt-link>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  // Получаем список динамических страниц сайта из API.
  async asyncData({ $axios, error }) {
    try {
      const pages = await $axios.$get(`/api/page/`);
      return { pages };
    } catch (e) {
      error({ statusCode: e.response.status });
    }
  },

  head() {
    let title = "Список страниц";
    let description = "Список динамических страниц сайта";

    return {
      title: title,
      meta: [
        { hid: "description", name: "description", content: description },
        { hid: "og:title", property: "og:title", content: title },
        { hid: "og:description", property: "og:description", content: description },
      ],
    };
  },
};
</script>
