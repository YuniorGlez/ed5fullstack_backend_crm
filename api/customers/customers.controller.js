const CustomersModel = require("./customers.model");

module.exports = { getAll, getOne, deleteOne, putOne, patchOne, postOne };

function getAll(req, res) {
  return CustomersModel.find()
    .then((customers) => {
      if (customers.length === 0) {
        return res.sendStatus(404);
        return res.status(404).send("No hay customers");
        return res.status(404).json({ err: "No hay customers" });
      } else {
        // Realmente devolver un array vacío si no hay nadie es mejor o "más standar".
        // Pero en este ejemplo estoy decidiendo devolver 404 como se ve arriba
        return res.json(customers);
      }
    })
    .catch((e) => {
      return res.status(500).json(e);
    });
}

function getOne(req, res) {
  const id = req.params.id;
  return CustomersModel.findById(id)
    .then((customer) => {
      return res.json(customer);
    })
    .catch((e) => {
        if (e.kind && e.kind === "ObjectId") {
        return res
          .status(400)
          .send("La string " + id + " no tiene forma de ObjectID");
      } else {
        return res.status(500).json(e);
      }
    });
}

function deleteOne(req, res) {
  const id = req.params.id;
  return CustomersModel.findByIdAndDelete(id)
    .then((customer) => {
      return res.json(customer);
    })
    .catch((e) => {
      return res.status(500).json(e);
    });
}

// TODO: Este no está respondiendo bien. Debería de responder con los datos modificados y no el objeto anterior
function putOne(req, res) {
  const id = req.params.id;
  return CustomersModel.findByIdAndUpdate(id, req.body, { runValidators: true })
    .then((customer) => {
      return res.json(customer);
    })
    .catch((e) => {
        return res.status(500).json(e)
    });
}

// TODO: Este no está respondiendo bien. Debería de responder con los datos modificados y no el objeto anterior
function patchOne(req, res) {
  const id = req.params.id;
  // El PUT y el PATCH ahora mismo están funcionando igual. Solo editan los atributos que mandas por el body. Tenerlo en cuenta
  return CustomersModel.findByIdAndUpdate(
    id,
    { $set: req.body },
    { runValidators: true }
  )
    .then((customer) => {
      return res.json(customer);
    })
    .catch((e) => {
        return res.status(500).json(e)
    });
}

function postOne(req, res) {
  return CustomersModel.create(req.body)
    .then((customer) => {
      return res.status(201).json(customer);
    })
    .catch((e) => {
        return res.status(500).json(e)
    });
}
