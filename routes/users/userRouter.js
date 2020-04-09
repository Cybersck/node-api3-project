const express = require('express');

const logger = require('../../middleware/logger');
const userMiddleware = require('../../middleware/userMiddleware');
const userController = require('../../controllers/userController');

const router = express.Router();

/**Add User */
router.post('/', logger, userMiddleware.validateUser, userController.addUser)

/**Get Users */
router.get('/', logger, userController.getAllUsers);

/** Get User by ID */
router.get('/:id', logger, userMiddleware.validateUserId, userController.getUser);

/** Delete User */
router.delete('/:id', logger, userMiddleware.validateUserId, userController.deleteUser);

/** Update User */
router.put('/:id', logger, userMiddleware.validateUserId, userController.updateUser);

/**Get posts by User ID */
router.get('/:id/posts', logger, userMiddleware.validateUserId, userController.getUserPosts);

module.exports = router;
