const express = require("express");
const router = express.Router();
const authorController = require("../controller/authorController");



router.post("/author", authorController.creatAuthor);
router.get("/author", authorController.getAuthors);
router.get("/author/:id", authorController.getAuthor);
router.put("/author/:id", authorController.updateAuthor);
router.delete("/author/:id", authorController.deleteAuthor);




module.exports = router;