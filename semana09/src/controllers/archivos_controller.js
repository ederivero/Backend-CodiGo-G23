import {
  devolverArchivoDelBucket,
  subirArchivoAlBucket,
} from "../utils/manejo_archivos_s3.js";

export const subirArchivo = async (req, res) => {
  // Cuando usamos el middleware de multer y usamos el single esto agregara en nuestro req la propiedad file
  const archivo = req.file;
  console.log(archivo);

  await subirArchivoAlBucket({
    archivo: archivo.buffer,
    nombre: archivo.originalname,
    extension: archivo.mimetype,
    carpeta: "productos",
  });

  return res.status(201).json({
    message: "Archivo subido exitosamente",
  });
};

export const devolverArchivo = async (req, res) => {
  const url = await devolverArchivoDelBucket({
    carpeta: "productos",
    archivo: "alacena.jpeg",
  });

  return res.json({
    content: url,
  });
};
