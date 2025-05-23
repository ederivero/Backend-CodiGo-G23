import { subirArchivoAlBucket } from "../utils/manejo_archivos_s3.js";

export const subirArchivo = async (req, res) => {
  // Cuando usamos el middleware de multer y usamos el single esto agregara en nuestro req la propiedad file
  const archivo = req.file;
  console.log(archivo);
  //   await subirArchivoAlBucket();

  return res.status(201).json({
    message: "Archivo subido exitosamente",
  });
};
