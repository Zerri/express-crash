import express from 'express';
import {
  getExtraServices,
  // getPost,
  // createPost,
  // updatePost,
  // deletePost,
} from '../controllers/extraServiceController.js';
const router = express.Router();

// Get all posts
router.get('/', getExtraServices);

// Get single post
// router.get('/:id', getPost);

// Create new post
// router.post('/', createPost);

// Update Post
// router.put('/:id', updatePost);

// Delete Post
// router.delete('/:id', deletePost);

export default router;
