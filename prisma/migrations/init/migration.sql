-- CreateEnum
CREATE TYPE "estatus" AS ENUM ('activo', 'baja');

-- CreateEnum
CREATE TYPE "estatus_transaccion" AS ENUM ('pendiente', 'pagada', 'cancelada');

-- CreateEnum
CREATE TYPE "flujo_efectivo" AS ENUM ('efectivo', 'cuenta por cobrar', 'cuenta por pagar');

-- CreateEnum
CREATE TYPE "tipo_movimiento" AS ENUM ('ingreso', 'egreso');

-- CreateEnum
CREATE TYPE "tipo_persona" AS ENUM ('cliente', 'proveedor');

-- CreateTable
CREATE TABLE "balance" (
    "id_balance" SERIAL NOT NULL,
    "total_ingreso" DECIMAL(14,2) NOT NULL,
    "total_egreso" DECIMAL(14,2) NOT NULL,
    "resultado_neto" DECIMAL(14,2) NOT NULL,
    "presupuesto" DECIMAL(14,2) NOT NULL,
    "ahorro_mensual" DECIMAL(14,2) NOT NULL DEFAULT 0.00,
    "resultado_final" DECIMAL(14,2) NOT NULL,
    "id_usuario" INTEGER,

    CONSTRAINT "balance_pkey" PRIMARY KEY ("id_balance")
);

-- CreateTable
CREATE TABLE "categoria" (
    "id_categoria" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "tipo" "tipo_movimiento" NOT NULL DEFAULT 'ingreso',
    "estatus" "estatus" NOT NULL DEFAULT 'activo',
    "flujo" "flujo_efectivo" NOT NULL DEFAULT 'efectivo',
    "id_usuario" INTEGER,
    "mostrar_panel" BOOLEAN NOT NULL DEFAULT true,
    "icono" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "categoria_pkey" PRIMARY KEY ("id_categoria")
);

-- CreateTable
CREATE TABLE "notificacion" (
    "id_notificacion" SERIAL NOT NULL,
    "descripcion" VARCHAR(100) NOT NULL,
    "fecha_notificacion" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id_usuario" INTEGER,
    "id_perfil" INTEGER,

    CONSTRAINT "notificacion_pkey" PRIMARY KEY ("id_notificacion")
);

-- CreateTable
CREATE TABLE "perfil" (
    "id_perfil" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "icono" INTEGER,
    "fecha_creacion" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estatus" "estatus" NOT NULL DEFAULT 'activo',
    "id_usuario" INTEGER,
    "pin" VARCHAR(100),
    "super_usuario" BOOLEAN DEFAULT false,

    CONSTRAINT "perfil_pkey" PRIMARY KEY ("id_perfil")
);

-- CreateTable
CREATE TABLE "persona" (
    "id_persona" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,
    "tipo" "tipo_persona" NOT NULL DEFAULT 'cliente',
    "estatus" "estatus" NOT NULL DEFAULT 'activo',
    "id_usuario" INTEGER,

    CONSTRAINT "persona_pkey" PRIMARY KEY ("id_persona")
);

-- CreateTable
CREATE TABLE "subcategoria" (
    "id_subcategoria" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "tipo" "tipo_movimiento" NOT NULL,
    "estatus" "estatus" NOT NULL DEFAULT 'activo',
    "flujo" "flujo_efectivo" NOT NULL DEFAULT 'efectivo',
    "id_categoria" INTEGER,
    "mostrar_panel" BOOLEAN DEFAULT true,
    "id_usuario" INTEGER,
    "icono" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "subcategoria_pkey" PRIMARY KEY ("id_subcategoria")
);

-- CreateTable
CREATE TABLE "transaccion" (
    "id_transaccion" SERIAL NOT NULL,
    "tipo" "tipo_movimiento" NOT NULL,
    "fecha_transaccion" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nota" VARCHAR(100),
    "monto_total" DECIMAL(14,2) NOT NULL,
    "plazos" INTEGER DEFAULT 1,
    "estatus" "estatus_transaccion" NOT NULL DEFAULT 'pendiente',
    "id_categoria" INTEGER,
    "id_usuario" INTEGER,
    "id_perfil" INTEGER,
    "id_subcategoria" INTEGER,
    "id_persona" INTEGER,

    CONSTRAINT "transaccion_pkey" PRIMARY KEY ("id_transaccion")
);

-- CreateTable
CREATE TABLE "transaccion_cuota" (
    "id_cuota" SERIAL NOT NULL,
    "id_transaccion" INTEGER,
    "monto" DECIMAL(14,2) NOT NULL,
    "fecha_vencimiento" DATE,
    "fecha_pago" DATE,
    "estatus" "estatus_transaccion" NOT NULL DEFAULT 'pendiente',
    "pagado" DECIMAL(14,2) NOT NULL DEFAULT 0,

    CONSTRAINT "transaccion_cuota_pkey" PRIMARY KEY ("id_cuota")
);

-- CreateTable
CREATE TABLE "usuario" (
    "id_usuario" SERIAL NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,
    "apellido_paterno" VARCHAR(50) NOT NULL,
    "apellido_materno" VARCHAR(50),
    "correo" VARCHAR(100) NOT NULL,
    "contrasena" VARCHAR(100) NOT NULL,
    "fecha_creacion" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "foto_perfil" TEXT,
    "estatus" "estatus" NOT NULL DEFAULT 'activo',
    "presupuesto" DECIMAL(14,2) NOT NULL DEFAULT 0.00,
    "ingreso_minimo" DECIMAL(14,2) NOT NULL DEFAULT 0.00,
    "egreso_maximo" DECIMAL(14,2) NOT NULL DEFAULT 0.00,
    "ahorro_mensual" DECIMAL(14,2) NOT NULL DEFAULT 0.00,
    "dia_corte" INTEGER,

    CONSTRAINT "usuario_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateTable
CREATE TABLE "verificacion" (
    "id_verificacon" SERIAL NOT NULL,
    "nombre" VARCHAR(150) NOT NULL,
    "correo" VARCHAR(100) NOT NULL,
    "codigo" INTEGER NOT NULL,
    "creado_en" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiracion" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "verificacion_pkey" PRIMARY KEY ("id_verificacon")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuario_correo_unique" ON "usuario"("correo");

-- AddForeignKey
ALTER TABLE "balance" ADD CONSTRAINT "balance_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "categoria" ADD CONSTRAINT "categoria_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "notificacion" ADD CONSTRAINT "notificacion_id_perfil_fkey" FOREIGN KEY ("id_perfil") REFERENCES "perfil"("id_perfil") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "notificacion" ADD CONSTRAINT "notificacion_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "perfil" ADD CONSTRAINT "perfil_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "persona" ADD CONSTRAINT "persona_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "subcategoria" ADD CONSTRAINT "subcategoria_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "categoria"("id_categoria") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "subcategoria" ADD CONSTRAINT "subcategoria_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "transaccion" ADD CONSTRAINT "transaccion_id_categoria_fkey" FOREIGN KEY ("id_categoria") REFERENCES "categoria"("id_categoria") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "transaccion" ADD CONSTRAINT "transaccion_id_perfil_fkey" FOREIGN KEY ("id_perfil") REFERENCES "perfil"("id_perfil") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "transaccion" ADD CONSTRAINT "transaccion_id_persona_fkey" FOREIGN KEY ("id_persona") REFERENCES "persona"("id_persona") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "transaccion" ADD CONSTRAINT "transaccion_id_subcategoria_fkey" FOREIGN KEY ("id_subcategoria") REFERENCES "subcategoria"("id_subcategoria") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "transaccion" ADD CONSTRAINT "transaccion_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuario"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "transaccion_cuota" ADD CONSTRAINT "transaccion_cuota_id_transaccion_fkey" FOREIGN KEY ("id_transaccion") REFERENCES "transaccion"("id_transaccion") ON DELETE NO ACTION ON UPDATE NO ACTION;

