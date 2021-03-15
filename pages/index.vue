<template>
  <main>
    <h1>Контент главной страницы</h1>

    <div class="content">
      <p>Шаблон связки Nuxt + Express.</p>
      <p>База MognoDB, ORM Mongoose.</p>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: "Шаблон Nuxt-Express",
      description: "Описание контента главной страницы сайта",
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
