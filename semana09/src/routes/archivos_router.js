import { Router } from "express";
import multer from "multer";
import {
  devolverArchivo,
  subirArchivo,
} from "../controllers/archivos_controller.js";

const middlewareArchivos = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    const tipoArchivo = file.mimetype; // Es donde estara el tipo de archivo que esta siendo subido
    if (tipoArchivo === "application/pdf") {
      cb(new Error("El archivo no puede ser un PDF"));
    }
    // Estariamos aceptando que pase el filtro de archivos
    cb(null, true);
  },
  // byte * 1024 > kilobytes * 1024 > megabytes * 1024 > gigabytes * 1024 > terabytes * 1024 > petabyte
  limits: { fileSize: 10 * 1024 * 1024 },
});
export const archivosRouter = Router();

archivosRouter.post(
  "/subir-archivo",
  middlewareArchivos.single("archivo"),
  subirArchivo
);

archivosRouter.get("/devolver-archivo", devolverArchivo);
