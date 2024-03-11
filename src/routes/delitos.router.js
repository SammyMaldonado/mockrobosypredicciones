// delitos.router.js

import { Router } from "express";
import stealController from "../controllers/steal.controller.js";
import delitosController from "../controllers/delitos.controller.js";

const router = Router();

router.get('/robos', stealController.getSteals);
router.get('/delitosReales', delitosController.getDelitosReales);
router.get('/mockdelitos', delitosController.getRandomDelitos);
router.post('/postmockdelitos', delitosController.createRandomDelitos);


export default router;