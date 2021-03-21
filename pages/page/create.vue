<template>
  <main>
    <h1>Создать страницу</h1>

    <PageForm action="create" />
  </main>
</template>

<script>
export default {
  head() {
    let title = "Создать страницу";
    let description = "Создать динамическую страницу = запись в базе";

    return {
      title: title,
      meta: [
        { hid: "description", name: "description", content: description },
        { hid: "og:title", property: "og:title", content: title },
        { hid: "og:description", property: "og:description", content: description },

        // Указываем роботам поисковых систем, что текущую страницу не нужно индексировать.
        { name: "robots", content: "noindex, nofollow" },
      ],
    };
  },
};
</script>
