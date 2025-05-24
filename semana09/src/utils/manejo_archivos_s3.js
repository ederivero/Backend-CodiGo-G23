import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
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

export const devolverURLDeSubidaDelBucket = async ({
  carpeta,
  archivo,
  mimetype,
} = data) => {
  const comand = new PutObjectCommand({
    Bucket: process.env.BUCKET_NAME,
    Key: `${carpeta}/${archivo}`,
    ContentType: mimetype,
  });

  try {
    const url = await getSignedUrl(s3, comand, { expiresIn: 60 });
    return url;
  } catch (error) {
    console.log("Error al generar la url para subir el archivo");
    throw error;
  }
};

export const eliminarArchivoDelBucket = async ({ carpeta, archivo }) => {
  console.log(
    process.env.BUCKET_REGION,
    process.env.BUCKET_ACCESS_KEY,
    process.env.BUCKET_SECRET_ACCESS_KEY
  );
  const comand = new DeleteObjectCommand({
    Bucket: process.env.BUCKET_NAME,
    Key: `${carpeta}/${archivo}`,
  });

  await s3.send(comand);
};
