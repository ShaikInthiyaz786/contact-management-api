const express = require("express");
const Contact = require("../models/contact").default;
const { authenticateToken } = require("../middleware/authMiddleware");
const router = express.Router();

// Add Contact
router.post("/", authenticateToken, async (req, res) => {
  const { name, email, phoneNumber, address, timezone } = req.body;
  try {
    const contact = await Contact.create({
      userId: req.user.userId,
      name,
      email,
      phoneNumber,
      address,
      timezone,
    });
    res.status(201).json(contact);
  } catch (error) {
    res.status(400).json({ error: "Invalid data" });
  }
});

// Get Contacts
router.get("/", authenticateToken, async (req, res) => {
  try {
    const contacts = await Contact.findAll({
      where: { userId: req.user.userId },
    });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Update Contact
router.put("/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  const { name, email, phoneNumber, address, timezone } = req.body;
  try {
    await Contact.update(
      { name, email, phoneNumber, address, timezone },
      { where: { id, userId: req.user.userId } }
    );
    res.json({ message: "Contact updated" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Delete Contact (Soft Delete)
router.delete("/:id", authenticateToken, async (req, res) => {
  const { id } = req.params;
  try {
    await Contact.destroy({ where: { id, userId: req.user.userId } });
    res.json({ message: "Contact deleted" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

module.exports = router;
