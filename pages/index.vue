<template>
  <main>
    <h1>Контент главной страницы</h1>

    <p>Базовый шаблон для работы Nuxt в качестве middleware для Express.</p>
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
