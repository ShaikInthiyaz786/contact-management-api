const express = require("express");
const multer = require("multer");
const csv = require("csv-parser");
const Contact = require("../../models/contact").default;
const { authenticateToken } = require("../../middleware/authMiddleware");
const router = express.Router();

const upload = multer({ dest: "uploads/" });

// Upload and Parse CSV
router.post(
  "/upload",
  authenticateToken,
  upload.single("file"),
  async (req, res) => {
    const filePath = req.file.path;
    const contacts = [];

    try {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on("data", (row) => contacts.push(row))
        .on("end", async () => {
          await Contact.bulkCreate(
            contacts.map((contact) => ({ ...contact, userId: req.user.userId }))
          );
          res.json({ message: "Contacts uploaded successfully" });
        });
    } catch (error) {
      res.status(500).json({ error: "Something went wrong" });
    }
  }
);

module.exports = router;
