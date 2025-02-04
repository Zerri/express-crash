import express from 'express';
import { ticketFormTemplateController, createTicketController } from '../controllers/ticketController.js';

const router = express.Router();

// Get all extra services
router.get('/create/1/form', ticketFormTemplateController);

router.post('/AddTicket/1', createTicketController);

export default router;