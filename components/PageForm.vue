<template>
  <div class="form">
    <div v-for="element in form" :key="element.name" class="form-element">
      <label :for="element.name">{{ element.label }}</label>
      <input type="text" v-model="pageToEdit[element.name]" :id="element.name" />
    </div>

    <button v-if="this.action === 'create'" @click="createPage">Создать страницу</button>
    <button v-if="this.action === 'update'" @click="updatePage">Обновить страницу</button>
    <button v-if="this.action === 'update'" @click="deletePage">Удалить страницу</button>
  </div>
</template>

<script>
export default {
  // Это переиспользуемый компонент с формой для создания/редактирования/удаления страницы.
  // В зависимости от поступаемых пропсов меняется отображение кнопок.
  // Если компонент используется для редактирования текущей страницы, то в него передаются её данные.
  props: { page: { type: Object, default: () => ({}) }, action: { type: String } },

  // Нам потребуется текущий URL страницы, которые не будет связан с input формы.
  data() {
    return {
      pageToEdit: {},
      form: [
        { name: "url", label: "Адрес страницы URL" },
        { name: "h1", label: "Заголовок H1" },
        { name: "title", label: "Title страницы" },
        { name: "description", label: "Мета-тег Description" },
        { name: "content", label: "Контент страницы" },
      ],
    };
  },
  methods: {
    async createPage() {
      try {
        // Создаём новую страницу.
        await this.$axios.post(`/api/page`, this.pageToEdit);
        this.$router.push(`/page/${this.pageToEdit.url}`);
      } catch (err) {
        // Если страница не создана, то в консоль выводим ошибку из бэкенда.
        console.log(err.response.data.message);
      }
    },
    async updatePage() {
      try {
        // При обновлении текущей страницы нужен исходный URL для запроса в API.
        await this.$axios.patch(`/api/page/${this.page.url}`, this.pageToEdit);
        // После обновления контента происходит перенаправление на страницу со списком страниц.
        this.$router.push(`/page`);
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
    async deletePage() {
      try {
        // При удалении страницы также используем текущий URL, а не изменяемый URL в форме.
        await this.$axios.delete(`/api/page/${this.page.url}`);
        this.$router.push(`/page`);
      } catch (err) {
        console.log(err.response.data.message);
      }
    },
  },
  beforeMount() {
    // Делаем информацию о странице редактируемой.
    Object.assign(this.pageToEdit, this.page);
  },
};
</script>
