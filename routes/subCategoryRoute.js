const express = require("express");
const subCategoryRouter = express.Router();

const {
  createSubCategory,
  getAllSubCategory,
  getSubCategoryById,
  updateSubCategory,
  deleteSubCategory,
} = require("../controllers/subCategoryController");
const { authMiddleware, isAdminMd } = require("../middleware/authMiddle");

subCategoryRouter
.post("/",authMiddleware,isAdminMd,createSubCategory)
.get("/", getAllSubCategory)
.get("/:_id", getSubCategoryById)
.put("/:_id",authMiddleware,isAdminMd,updateSubCategory)
.delete("/:_id",authMiddleware,isAdminMd,deleteSubCategory);
  

module.exports = subCategoryRouter;
