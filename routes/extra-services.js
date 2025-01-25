import express from 'express';
import { getExtraServices, getExtraServiceById } from '../controllers/extraServiceController.js';

const router = express.Router();

// Get all extra services
router.get('/', getExtraServices);

// Get single extra service
router.get('/:id', getExtraServiceById);

// Create new post
// router.post('/', createPost);

// Update Post
// router.put('/:id', updatePost);

// Delete Post
// router.delete('/:id', deletePost);

export default router;
