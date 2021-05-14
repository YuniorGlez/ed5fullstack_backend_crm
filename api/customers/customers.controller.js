const CustomersModel = require("./customers.model");

module.exports = { getAll, getOne, deleteOne, putOne, patchOne, postOne };

function getAll(req, res) {
  return CustomersModel.find().then((customers) => {
    return res.json(customers);
  })
}

function getOne(req, res) {
    const id = req.params.id;
    return CustomersModel.findById(id).then((customer) => {
      return res.json(customer);
    })
}

function deleteOne(req, res) {
    const id = req.params.id;
    return CustomersModel.findByIdAndDelete(id).then((customer) => {
      return res.json(customer);
    })
}

function putOne(req, res) {
    const id = req.params.id;
    return CustomersModel.findByIdAndUpdate(id, req.body , { runValidators : true}).then((customer) => {
      return res.json(customer);
    })
}

function patchOne(req, res) {
    const id = req.params.id;
    // El PUT y el PATCH ahora mismo están funcionando igual. Solo editan los atributos que mandas por el body. Tenerlo en cuenta
    return CustomersModel.findByIdAndUpdate(id, { $set : req.body} , { runValidators : true}).then((customer) => {
      return res.json(customer);
    })
}

function postOne(req, res) {
    return CustomersModel.create(req.body).then((customer) => {
      return res.json(customer);
    })
}
