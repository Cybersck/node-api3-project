const db = require('../routes/users/userDb');

exports.addUser = (req, res) => {
    db.insert(req.body.user).then(res.status(201).send('Created New User'));
}
exports.getAllUsers = (req, res) => {
    db.get().then(userList => {
        res.status(200).send(userList);
    });
}
exports.getUser = (req, res) => {
    res.status(200).send(req.user);
}

exports.deleteUser = (req, res) => {
    db.remove(req.user.id).then(res.status(200).send('User Deleted Successfully'));
}

exports.updateUser = (req, res) => {
    if (!req.body.user) {res.status(400).send('Invalid User Data'); return;}
    changes = {...req.user, name: req.body.user.name};
    db.update(req.user.id, changes).then(res.status(200).send('Success'));
}

exports.getUserPosts = (req, res) => {
    db.getUserPosts(req.user.id).then(postList => {
        res.status(200).send(postList);
    });
}