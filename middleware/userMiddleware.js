const db = require('../routes/users/userDb');

exports.validateUserId = (req, res, next) => {
    db.getById(req.params.id).then(user => {
      if (user === undefined) {
        res.status(400).send({ message: "invalid user id" });
        return;
      } else {
        req.user = user;
        next();
      }
    });
  }

exports.validateUser = (req, res, next) => {
  let missingName;
  if (req.body.user) {
  switch(req.body.user.name) {
    case undefined:
    case null:
    case '':
      missingName = true;
      break;
    default:
      missingName = false;
      break;
  }
}
  if (JSON.stringify(req.body)==='{}') {
    res.status(400).send({message: 'Missing Post Data'});
  } else if (missingName) {
    res.status(400).send({ message: "Missing Required Name Field" })
  } else {
    next();
  }
  }

exports.validatePost = (req, res, next) => {
  if (JSON.stringify(req.body)==='{}') {
    res.status(400).send({message: 'Missing Post Data'});
  } else {
    next();
  }
}