import { Request, Response, NextFunction } from 'express';
import BaseController from './_base.controller';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcrypt';
import { validationResult } from 'express-validator';

class AuthController extends BaseController {
  public autenticarUsuario = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() })
    }
    // extraer el email y password
    const { email, password } = req.body;

    try {
      // Revisar que sea un usuario registrado
      const usuario = await this.db.usuarioModel.findOne({ email });
      if (!usuario) {
        return res.status(400).json({ msg: 'El usuario no existe' });
      }

      // Revisar el password
      const passCorrecto = await bcryptjs.compare(password, usuario.password);
      if (!passCorrecto) {
        return res.status(400).json({ msg: 'Password Incorrecto' })
      }

      // Si todo es correcto Crear y firmar el JWT
      const payload = {
        usuario: {
          id: usuario.id
        }
      };

      // firmar el JWT
      jwt.sign(payload, 'PRUEBA', {
        expiresIn: 3600 // 1 hora
      }, (error, token) => {
        if (error) throw error;

        // Mensaje de confirmación
        res.json({ token });
      });
    } catch (error) {
      console.log(error);
    }
  };

  public usuarioAutenticado = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      console.log(req);
      const usuario = await this.db.usuarioModel.findById(req.body.usuario.id).select('-password');
      res.json({ usuario });
    } catch (err) {
      res.status(500).json({ msg: 'Hubo un error' });
    }
  };
}

export default AuthController;
