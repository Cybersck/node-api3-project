const db = require('../routes/posts/postDb');

exports.validatePostId = (req, res, next) => {
  db.getById(req.params.id).then(post => {
    if (post === undefined) {
      res.status(400).send({ message: "invalid post id" });
      return;
    } else {
      req.post = post;
      next();
    }
  });
}
  