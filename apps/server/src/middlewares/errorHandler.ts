import { Request, Response, NextFunction } from 'express';
import CustomError from '../exceptions/customError';

const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction // no se usa porque es un middleware de error
) => {
  console.error(err.stack); // Log del error

  // Respuesta al cliente
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Error interno del servidor',
  });
};

export default errorHandler;