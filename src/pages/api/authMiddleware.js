// En pages/api/authMiddleware.js
export default function authMiddleware(req, res, next) {
    // Verifica la autenticación aquí
    if (usuarioNoAutenticado) {
      return res.status(401).json({ mensaje: "Acceso no autorizado" });
    }
  
    // Si el usuario está autenticado, continúa
    next();
  }