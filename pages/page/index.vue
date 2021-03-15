<template>
  <main>
    <h1>Список страниц</h1>

    <nuxt-link :to="`/page/${page.url}`" v-for="page in pages" :key="page.h1">{{ page.h1 }}</nuxt-link>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`/api/page/`);
    return { pages: data };
  },
  data() {
    return {
      title: "Список страниц",
      description: "Список динамических страниц сайта",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: "description", name: "description", content: this.description },
        { hid: "og:title", property: "og:title", content: this.title },
        { hid: "og:description", property: "og:description", content: this.description },
      ],
    };
  },
};
</script>
