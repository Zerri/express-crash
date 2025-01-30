import express from 'express';
import { quadrupleProcedureController } from '../controllers/quadrupleProcedureController.js';

const router = express.Router();

router.get('/:procedureId', quadrupleProcedureController);

export default router;