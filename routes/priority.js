import express from 'express';
import { priorityController } from '../controllers/priorityController.js';

const router = express.Router();

// Get all extra services
router.get('/', priorityController);

export default router;
