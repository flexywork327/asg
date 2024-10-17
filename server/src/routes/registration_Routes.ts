import { Router } from 'express';
import { registrationControllers } from '../controllers/registration_Controllers';

const router = Router();

// post routes
router.post('/register', registrationControllers.add);

// get routes
router.get('/records', registrationControllers.getAll);

export default router;
