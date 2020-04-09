const express = require('express');
const logger = require('../../middleware/logger');
const postMiddleware = require('../../middleware/postMiddleware');
const userMiddleware = require('../../middleware/userMiddleware');
const postController = require('../../controllers/postController');
const router = express.Router();

/** Get All Posts */
router.get('/', logger, postController.getAllPosts);

/**Get Post by ID */
router.get('/:id', logger, postMiddleware.validatePostId, postController.getPost);

/** Delete Post by ID */
router.delete('/:id', logger, postMiddleware.validatePostId, postController.deletePost);

/** Add Post by User ID */
router.post('/:id/add', logger, userMiddleware.validateUserId, postController.addPost);

/** Update Post by Post ID */
router.put('/:id', logger, postMiddleware.validatePostId, postController.editPost);


module.exports = router;
