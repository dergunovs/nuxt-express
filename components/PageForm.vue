<template>
  <div class="form">
    <div class="form-element">
      <label for="url">Адрес страницы Url</label>
      <input type="text" v-model="page.url" id="url" />
    </div>
    <div class="form-element">
      <label for="h1">Заголовок H1</label>
      <input type="text" v-model="page.h1" id="h1" />
    </div>
    <div class="form-element">
      <label for="title">Title страницы</label>
      <input type="text" v-model="page.title" id="title" />
    </div>
    <div class="form-element">
      <label for="description">Мета-тег Description</label>
      <input type="description" v-model="page.description" id="description" />
    </div>
    <div class="form-element">
      <label for="content">Контент страницы</label>
      <textarea v-model="page.content" id="content" rows="4"></textarea>
    </div>

    <button v-if="this.action === 'create'" @click="createPage">Создать страницу</button>
    <button v-if="this.action === 'update'" @click="updatePage">Обновить страницу</button>
    <button v-if="this.action === 'update'" @click="deletePage">Удалить страницу</button>
  </div>
</template>

<script>
export default {
  props: { page: { type: Object, default: () => ({}) }, action: { type: String } },
  methods: {
    createPage() {
      this.$axios
        .post(`/api/page`, this.page)
        .then(() => {
          this.$router.push(`/page/${this.page.url}`);
        })
        .catch((err) => console.log(err.response.data.message));
    },
    updatePage() {
      this.$axios
        .patch(`/api/page/${this.page.url}`, this.page)
        .then(() => {
          this.$router.push(`/page`);
        })
        .catch((err) => console.log(err.response.data.message));
    },
    deletePage() {
      this.$axios
        .delete(`/api/page/${this.page.url}`)
        .then(() => {
          this.$router.push(`/page`);
        })
        .catch((err) => console.log(err.response.data.message));
    },
  },
};
</script>

<style>
.form {
  width: 100%;
  max-width: 600px;
  margin: auto;
}
.form-element {
  display: flex;
  flex-direction: column;
  margin: 16px;
}
.form-element input,
.form-element textarea {
  margin-top: 4px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
