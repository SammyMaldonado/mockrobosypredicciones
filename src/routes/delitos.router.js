// delitos.router.js

import { Router } from "express";
import stealController from "../controllers/delitos.controller.js"

const router = Router();

router.get('/mockdelitos', stealController.getRandomDelitos);
router.post('/postmockdelitos', stealController.createRandomDelitos);


export default router;