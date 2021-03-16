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
  head() {
    // У всех страниц должны быть title и description.
    let title = "Шаблон Nuxt-Express";
    let description = "Описание контента главной страницы сайта";

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
