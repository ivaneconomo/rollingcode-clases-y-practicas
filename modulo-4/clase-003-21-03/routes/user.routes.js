const { Router } = require("express");
const {
  getUsuario,
  postUsuario,
  putUsuario,
  deleteUsuario,
} = require("../controllers/user.controllers");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/userValidator");

const router = Router();

router.get("/", getUsuario);

router.post(
  "/",
  [
    check("nombre", "El nombre es requerido").not().isEmpty(),
    check("edad", "La edad debe ser un número").isNumeric(),
  ],
  validarCampos,
  postUsuario
);

router.put("/:id", putUsuario);

router.delete("/", deleteUsuario);

module.exports = router;
