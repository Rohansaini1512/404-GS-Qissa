import { Router } from "express";
import  {isLoggedIn } from '../middlewares/auth.middleware.js';
import { changePassword, forgotPassword, getProfile, login, logout, register, resetPassword, updateUser } from "../controllers/user.controller.js";
import upload from "../middlewares/multer.middleware.js";

const router = Router();

router.post('/register', upload.single("avatar"), register);
// router.post('/signup-2', register2);
router.post('/login', login);
router.get('/logout', logout);
router.get('/me', isLoggedIn , getProfile);
router.post("/reset", forgotPassword);
router.post("/reset/:resetToken", resetPassword);
router.post('/change-password', isLoggedIn, changePassword)
router.post('/update', isLoggedIn, upload.single("avatar"), updateUser)


export default router;