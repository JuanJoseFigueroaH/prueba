import { Router } from 'express';
import authRoute from './auth.route';
import usuarioRoute from './usuario.route';

const mainRoute = Router();

mainRoute.use('/auth', authRoute);
mainRoute.use('/usuarios', usuarioRoute);

export default mainRoute;
