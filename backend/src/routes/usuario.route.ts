import { Router } from 'express';
import UsuarioController from '../controllers/usuario.controller';

const usuarioRoute = Router();
const usuarioController = new UsuarioController();

usuarioRoute.post(
  '/',
  usuarioController.autenticarUsuario
);

export default usuarioRoute;
