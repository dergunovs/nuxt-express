<template>
  <main>
    <h1>Создать страницу</h1>

    <PageForm action="create" />
  </main>
</template>

<script>
export default {
  data() {
    return {
      title: "Создать страницу",
      description: "Создать динамическую страницу = запись в базе",
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: "description", name: "description", content: this.description },
        { hid: "og:title", property: "og:title", content: this.title },
        { hid: "og:description", property: "og:description", content: this.description },
        { name: "robots", content: "noindex, nofollow" },
      ],
    };
  },
};
</script>
