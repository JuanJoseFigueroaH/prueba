import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import AuthMiddleware from '../middleware/auth';
const authRoute = Router();
const authController = new AuthController();
const authMiddlware = new AuthMiddleware();

authRoute.post(
  '/',
  authController.autenticarUsuario
);

authRoute.get(
  '/',
  authMiddlware.auth,
  authController.usuarioAutenticado
);

export default authRoute;
