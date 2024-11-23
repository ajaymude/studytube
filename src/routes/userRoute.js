import express from 'express';
import { deleteUser, test, updateUser } from '../controllers/userController.js';
import { verifyToken } from '../middleware/verifyUser.js';

const userRoute = express.Router();

userRoute.get('/', test);
userRoute.post('/update/:id', verifyToken, updateUser);
userRoute.delete('/delete/:id', verifyToken, deleteUser);

export default userRoute;