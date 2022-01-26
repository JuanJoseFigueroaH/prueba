import { Request, Response, NextFunction } from 'express';
import BaseController from './_base.controller';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcrypt';
import { validationResult } from 'express-validator';

class UsuarioController extends BaseController {
    public autenticarUsuario = async (
      req: Request,
      res: Response,
      next: NextFunction
    ) => {
      // revisar si hay errores
      const errores = validationResult(req);
      if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() })
      }

      // extraer email y password
      const { email, password } = req.body;

      try {
        // Revisar que el usuario registrado sea unico
        const usuario = await this.db.usuarioModel.findOne({ email });

        if (usuario) {
          return res.status(400).json({ msg: 'El usuario ya existe' });
        }

        // Hashear el password
        const salt = await bcryptjs.genSalt(10);
        req.body.password = await bcryptjs.hash(password, salt);

        // guardar usuario
        const usuarioGuardado = await this.db.usuarioModel.create(req.body);

        // Crear y firmar el JWT
        const payload = {
          usuario: {
            id: usuarioGuardado.id
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
        res.status(400).send('Hubo un error');
      }
    }
}

export default UsuarioController;
