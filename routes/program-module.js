import express from 'express';
import { programModuleController } from '../controllers/programModuleController.js';

const router = express.Router();

router.get('/:moduleId', programModuleController);

export default router;