import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
  region: process.env.BUCKET_REGION,
  credentials: {
    accessKeyId: process.env.BUCKET_ACCESS_KEY,
    secretAccessKey: process.env.BUCKET_SECRET_ACCESS_KEY,
  },
});

export const subirArchivoAlBucket = async ({
  archivo,
  nombre,
  extension,
  carpeta,
} = data) => {
  const comand = new PutObjectCommand({
    Bucket: process.env.BUCKET_NAME,
    Key: `${carpeta}/${nombre}`,
    Body: archivo,
    ContentType: extension,
  });

  try {
    await s3.send(comand);

    return "Archivo subido exitosamente";
  } catch (error) {
    console.log(error);

    return "Error al subir el archivo";
  }
};

export const devolverArchivoDelBucket = async ({ carpeta, archivo } = data) => {
  const comando = new GetObjectCommand({
    Bucket: process.env.BUCKET_NAME,
    Key: `${carpeta}/${archivo}`,
  });

  const url = await getSignedUrl(s3, comando, { expiresIn: 30 });
  return url;
};
