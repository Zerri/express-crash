import express from 'express';
import { quadrupleProductLineController } from '../controllers/quadrupleProductLineController.js';

const router = express.Router();

// Get all extra services
router.get('/', quadrupleProductLineController);

export default router;
