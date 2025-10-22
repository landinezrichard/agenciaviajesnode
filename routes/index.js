import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/nosotros", (req, res) => {
  const variable = "Algun valor";
  res.render('nosotros', { variable });
});

router.get("/contacto", (req, res) => {
  res.send("Contacto");
});

export default router;