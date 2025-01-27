import express from 'express';
import { contactReasonController } from '../controllers/contactReasonController.js';

const router = express.Router();

// Get all extra services
router.get('/', contactReasonController);

export default router;
