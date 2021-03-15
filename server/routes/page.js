const express = require("express");
const router = express.Router();
const Page = require("../model/page");

router.get("/", async (req, res) => {
  try {
    const pages = await Page.find().select("h1 url -_id").sort("h1").lean();
    res.status(200).json(pages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:url", getPage, (req, res) => {
  res.json(res.page);
});

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

router.patch("/:url", getPage, async (req, res) => {
  Object.assign(res.page, req.body);
  try {
    await res.page.save();
    res.status(200).json(res.page);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/:url", getPage, async (req, res) => {
  try {
    await res.page.remove();
    res.status(200).json({ message: "Страница удалена" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getPage(req, res, next) {
  try {
    const page = await Page.findOne({ url: req.params.url }).exec();
    if (page == null) {
      return res.status(404).json({ message: "Страницы не существует" });
    } else {
      res.page = page;
      next();
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;
