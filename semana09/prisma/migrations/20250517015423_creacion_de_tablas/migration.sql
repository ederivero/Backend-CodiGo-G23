-- CreateEnum
CREATE TYPE "TipoDocumento" AS ENUM ('DNI', 'CE', 'RUC');

-- CreateTable
CREATE TABLE "productos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "precio" DOUBLE PRECISION NOT NULL,
    "disponible" BOOLEAN NOT NULL DEFAULT true,
    "cantidad" INTEGER NOT NULL,

    CONSTRAINT "productos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clientes" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "tipo_documento" "TipoDocumento" NOT NULL DEFAULT 'DNI',
    "numero_documento" TEXT NOT NULL,
    "correo" TEXT NOT NULL,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "operaciones" (
    "id" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "total" DOUBLE PRECISION,
    "cliente_id" INTEGER NOT NULL,

    CONSTRAINT "operaciones_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "detalle_operaciones" (
    "id" SERIAL NOT NULL,
    "cantidad" INTEGER NOT NULL,
    "sub_total" DOUBLE PRECISION NOT NULL,
    "producto_id" INTEGER NOT NULL,
    "operacion_id" INTEGER NOT NULL,

    CONSTRAINT "detalle_operaciones_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clientes_numero_documento_key" ON "clientes"("numero_documento");

-- AddForeignKey
ALTER TABLE "operaciones" ADD CONSTRAINT "operaciones_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detalle_operaciones" ADD CONSTRAINT "detalle_operaciones_producto_id_fkey" FOREIGN KEY ("producto_id") REFERENCES "productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detalle_operaciones" ADD CONSTRAINT "detalle_operaciones_operacion_id_fkey" FOREIGN KEY ("operacion_id") REFERENCES "operaciones"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
