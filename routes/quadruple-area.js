import express from 'express';
import { quadrupleAreaController } from '../controllers/quadrupleAreaController.js';

const router = express.Router();

router.get('/:areaId', quadrupleAreaController);

export default router;