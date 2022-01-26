import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import BaseValidator from './_base.validator';

class AuthMiddleware extends BaseValidator {
    public auth = async (
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      // Leer el token del header
      const token = req.header('x-auth-token');

      // Revisar si no hay token
      if (!token) {
        return res.status(401).json({ msg: 'No hay Token, permiso no válido' })
      }

      // validar el token
      try {
        const cifrado : any = jwt.verify(token, 'PRUEBA');
        req.body.usuario = cifrado.usuario;
        next();
      } catch (error) {
        res.status(401).json({ msg: 'Token no válido' });
      }
    }
}

export default AuthMiddleware;
