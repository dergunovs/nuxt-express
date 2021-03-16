// Маршруты для модели Page для обработки запросов с фронта.
const express = require("express");
const router = express.Router();
const Page = require("../model/page");

//Вывод всех динамических страниц сайта.
router.get("/", async (req, res) => {
  try {
    // Выбираем только нужны поля, чтобы в запросе не передавались лишние данные.
    const pages = await Page.find().select("h1 url -_id").sort("h1").lean();
    res.status(200).json(pages);
  } catch (err) {
    // Если возникает проблема, то возвращаем ошибку сервера.
    res.status(500).json({ message: err.message });
  }
});

// Получает контент конкретной страницы. Выносим повторяющиеся действия в функцию getPage для упрощения кода.
router.get("/:url", getPage, (req, res) => {
  res.json(res.page);
});

// Публикация новой страницы.
router.post("/", async (req, res) => {
  const page = new Page({
    h1: req.body.h1,
    title: req.body.title,
    description: req.body.description,
    url: req.body.url,
    content: req.body.content,
  });
  try {
    await page.save();
    res.status(200).json({ message: "Страница создана" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Обновление контента конкретной страницы.
router.patch("/:url", getPage, async (req, res) => {
  Object.assign(res.page, req.body);
  try {
    await res.page.save();
    res.status(200).json(res.page);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Удаление конкретной страницы.
router.delete("/:url", getPage, async (req, res) => {
  try {
    await res.page.remove();
    res.status(200).json({ message: "Страница удалена" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Функция для поиска конкретной страницы по URL.
async function getPage(req, res, next) {
  try {
    // Ищем страницу по URL, который указан в строке запроса.
    const page = await Page.findOne({ url: req.params.url }).exec();
    if (page == null) {
      // Возвращаем 404 ответ сервера, если страница не найдена.
      return res.status(404).json({ message: "Страницы не существует" });
    } else {
      // Передаём контент страницы, если URL найден.
      res.page = page;
      next();
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;
