import { Router } from "express";
import stealController from "../controllers/steal.controller.js";

const router = Router();

/* MongoDB */
router.get('/mock', stealController.getSteals);
router.post('/mock', stealController.createRandomSteals);
router.put('/mock', stealController.updateRandomSteals);
router.delete('/mock', stealController.deleteSteals);

export default router;