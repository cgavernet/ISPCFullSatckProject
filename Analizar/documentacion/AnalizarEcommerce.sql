-- Creo la BD
CREATE DATABASE AnalizarEcommerce;

-- Selecciono la BD creada
USE AnalizarEcommerce;

CREATE TABLE IF NOT EXISTS Usuario (
  id_usuario INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) NOT NULL,
  apellido VARCHAR(45) NOT NULL,
   email VARCHAR(45) NOT NULL,
  celular VARCHAR(45) NOT NULL,
  password VARCHAR(45) NOT NULL,
  habilitado TINYINT NOT NULL DEFAULT 1,
  fechaAlta DATETIME NOT NULL,
  admin TINYINT NOT NULL,
  PRIMARY KEY (id_usuario),
  UNIQUE INDEX email_UNIQUE (email ASC) VISIBLE);


CREATE TABLE IF NOT EXISTS Medidores (
  id_Medidor INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) NOT NULL,
  detalle VARCHAR(45) NOT NULL,
  identificador VARCHAR(45) NOT NULL,
  usuario INT UNSIGNED NOT NULL,
  PRIMARY KEY (id_Medidor),
  INDEX FK_usuario_idx (usuario ASC) VISIBLE,
  CONSTRAINT FK_usuario
    FOREIGN KEY (usuario)
    REFERENCES usuario (id_usuario)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
    
-- Tabla alertas

CREATE TABLE IF NOT EXISTS alertas (
  id_alerta INT UNSIGNED NOT NULL AUTO_INCREMENT,
  medidor INT UNSIGNED NOT NULL,
  valor FLOAT NOT NULL,
  fechaAlta DATETIME NOT NULL,
  PRIMARY KEY (id_alerta),
  INDEX FK_medidor_idx (medidor ASC) VISIBLE,
  CONSTRAINT FK_medidor_alertas
    FOREIGN KEY (medidor)
    REFERENCES Medidores (id_Medidor)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

-- Tabla "Productos"
CREATE TABLE Productos (
  id_producto INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  cantidad_disponible INT UNSIGNED NOT NULL
);

-- Tabla "Pedidos"
CREATE TABLE Pedidos (
  id_pedido INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  usuario INT UNSIGNED NOT NULL,
  fecha_hora_pedido DATETIME NOT NULL,
  estado_pedido VARCHAR(20) NOT NULL,
  FOREIGN KEY (usuario) REFERENCES Usuario(id_usuario)
);

-- Tabla "Detalles de pedido"
CREATE TABLE Detalles_pedido (
  id_detalle INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  id_pedido INT UNSIGNED NOT NULL,
  id_producto INT UNSIGNED NOT NULL,
  cantidad INT UNSIGNED NOT NULL,
  precio_unitario DECIMAL(10,2) NOT NULL,
  FOREIGN KEY (id_pedido) REFERENCES Pedidos(id_pedido),
  FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
);

-- Tabla "Categorías"
CREATE TABLE Categorias (
  id_categoria INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL
);

-- Tabla "Productos por categoría"
CREATE TABLE Productos_por_categoria (
  id_producto INT UNSIGNED NOT NULL,
  id_categoria INT UNSIGNED NOT NULL,
  FOREIGN KEY (id_producto) REFERENCES Productos(id_producto),
  FOREIGN KEY (id_categoria) REFERENCES Categorias(id_categoria),
  PRIMARY KEY (id_producto, id_categoria)
);

-- Tabla "Métodos de pago"
CREATE TABLE Metodos_pago (
  id_metodo_pago INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  descripcion TEXT NOT NULL
);

-- Tabla "Pedidos de pago"
CREATE TABLE Pedidos_pago (
  id_pedido INT UNSIGNED NOT NULL,
  id_metodo_pago INT UNSIGNED NOT NULL,
  monto DECIMAL(10,2) NOT NULL,
  fecha_hora_pago DATETIME NOT NULL,
  FOREIGN KEY (id_pedido) REFERENCES Pedidos(id_pedido),
  FOREIGN KEY (id_metodo_pago) REFERENCES Metodos_pago(id_metodo_pago),
  PRIMARY KEY (id_pedido, id_metodo_pago)
);


