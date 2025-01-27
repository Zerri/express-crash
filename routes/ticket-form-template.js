import express from 'express';
import { ticketFormTemplateController } from '../controllers/ticketFormTemplateController.js';

const router = express.Router();

// Get all extra services
router.get('/', ticketFormTemplateController);

export default router;
