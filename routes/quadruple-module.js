import express from 'express';
import { quadrupleModuleController } from '../controllers/quadrupleModuleController.js';

const router = express.Router();

router.get('/:moduleId', quadrupleModuleController);

export default router;