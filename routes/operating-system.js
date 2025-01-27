import express from 'express';
import { operatingSystemController } from '../controllers/operatingSystemController.js';

const router = express.Router();

// Get all extra services
router.get('/', operatingSystemController);

export default router;
