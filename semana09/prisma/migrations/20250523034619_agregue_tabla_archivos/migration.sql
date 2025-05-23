-- CreateTable
CREATE TABLE "archivos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "extension" TEXT NOT NULL,
    "folder" TEXT NOT NULL,
    "producto_id" INTEGER,

    CONSTRAINT "archivos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "archivos" ADD CONSTRAINT "archivos_producto_id_fkey" FOREIGN KEY ("producto_id") REFERENCES "productos"("id") ON DELETE SET NULL ON UPDATE CASCADE;
