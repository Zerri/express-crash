import express from 'express';
import { procedureModuleController } from '../controllers/procedureModuleController.js';

const router = express.Router();

router.get('/:id/Release', procedureModuleController);

export default router;