import express from "express";
import {
        registerController,
        loginController,
        testControllers,
} from "../controllers/authController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";
//router object
const router = express.Router();
// routing
//REGISTER || POST add user
router.post('/register', registerController)
//LOGIN || POST
router.post("/login", loginController);
//test routes
router.get("/test", requireSignIn, isAdmin, testControllers);
export default router;