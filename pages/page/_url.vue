<template>
  <main>
    <h1>{{ page.h1 }}</h1>
    <div v-html="page.content"></div>

    <button @click="showPageForm = true">Редактировать</button>
    <PageForm v-if="showPageForm" :page="page" action="update" />
  </main>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const { data } = await $axios.get(`/api/page/${params.url}`);
    return { page: data };
  },
  data() {
    return {
      page: { url: "", h1: "", title: "", description: "", content: "" },
      showPageForm: false,
    };
  },
  head() {
    return {
      title: this.page.title,
      meta: [
        { hid: "description", name: "description", content: this.page.description },
        { hid: "og:title", property: "og:title", content: this.page.title },
        { hid: "og:description", property: "og:description", content: this.page.description },
      ],
    };
  },
};
</script>
