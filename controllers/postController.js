const db = require('../routes/posts/postDb');


exports.addPost = (req, res) => {
    if (!req.body.text) {res.status(400).send({message: 'Missing Post Data'}); return;}
    let newPost = {text: req.body.text, user_id: req.params.id};
    db.insert(newPost).then(res.status(200).send({message: 'Success'}));
}

exports.getAllPosts = (req, res) => {
    db.get().then(postList => res.status(200).send(postList));
}

exports.getPost = (req, res) => {
    db.getById(req.post.id).then(post => res.status(200).send(post));
}

exports.deletePost = (req, res) => {
    db.remove(req.post.id).then(post => res.status(200).send({message: 'Success'}));
}

exports.editPost = (req, res) => {
    if (!req.body.text) {res.status(400).send('Invalid Post Data'); return;}
    let changes = {...res.post, text: req.body.text}
    db.update(req.post.id, changes).then(res.status(200).send({message: 'Success'}));
}