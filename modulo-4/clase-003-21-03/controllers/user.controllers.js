const getUsuario = (req, res) => {
  res.json({
    msg: "Soy el GET",
  });
};

const postUsuario = (req, res) => {
  const { nombre, edad } = req.body;
  res.json({
    msg: "Soy el POST",
    nombre,
    edad,
  });
};

const putUsuario = (req, res) => {
  const { id } = req.params;
  res.json({
    msg: "Soy el PUT",
    id,
  });
};

const deleteUsuario = (req, res) => {
  const { nombre, edad } = req.body;
  res.json({
    msg: "Soy el DELETE",
    nombre,
    edad,
  });
};

module.exports = {
  getUsuario,
  postUsuario,
  putUsuario,
  deleteUsuario,
};
