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
      link: [{ rel: "canonical", href: `${process.env.baseUrl}${this.$route.path}` }],
      meta: [
        { hid: "og:url", property: "og:url", content: `${process.env.baseUrl}${this.$route.path}` },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:locale", property: "og:locale", content: "ru_RU" },
      ],
    };
  },
};
</script>
