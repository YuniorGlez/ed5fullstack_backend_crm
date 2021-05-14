const controller = require("./customers.controller");
const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", controller.postOne);
router.put("/:id", controller.putOne);
router.patch("/:id", controller.patchOne);
router.delete(
  "/:id",
  (req, res, next) => {
    if (!req.headers.authorization) {
      return res.sendStatus(403);
    }
    const token = req.headers.authorization;
    jwt.verify(token, process.env.TOKEN_PASSWORD, (err, data) => {
      if (err) {
        return res.sendStatus(403);
      }
      console.log({ data });
        req.currentUser = data;
        next();
    });
  },
  controller.deleteOne
);

module.exports = router;
