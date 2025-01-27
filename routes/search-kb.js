import express from 'express';
import { handleKBSearch } from '../controllers/searchKBController.js';

const router = express.Router();

// Get all extra services
router.post('/', handleKBSearch);

export default router;
