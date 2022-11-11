USE `Analizar` ;
-- -----------------------------------------------------
-- Datos de Prueba Analizar
-- -----------------------------------------------------
-- Usuarios
-- Se crean varios usuarios y un usuario Administrador
-- usuario: admin@analizar.com.ar password: 1234
-- -----------------------------------------------------
INSERT INTO `analizar`.`usuarios` (`nombre`, `apellido`, `email`, `celular`, `password`, `habilitado`, `admin`, `fechaAlta`) 
VALUES ('Admin', 'Admin', 'admin@analizar.com.ar', '0000', '1234', '1', '0', '2022/11/11 00:00:00'),
('Carlos Daniel', 'Pozzo', 'cpozzo@analizar.com.ar', '0000', '1234', '0', '0', '2022/11/11 15:00:00'),
('Carlos', 'Gavernet', 'cgavernet@analizar.com.ar', '3385400879', '1234', '0', '0', '2022/11/11 15:10:00'),
('Diego', 'Ponde De Leon', 'dponcedeleon@analizar.com.ar', '0000', '1234', '0', '0', '2022/11/11 15:10:50'),
('Francisco', 'Giachero', 'fgiachero@analizar.com.ar', '0000', '1234', '0', '0', '2022/11/11 15:11:20'),
('Julia', 'Martins', 'jmartins@analizar.com.ar', '0000', '1234', '0', '0', '2022/11/11 15:11:10'),
('Noemi', 'Zalazar', 'nzalazar@analizar.com.ar', '0000', '1234', '0', '0', '2022/11/11 15:15:10'),
('Milagros', 'Wolowiez', 'mwolowiez@analizar.com.ar', '0000', '1234', '0', '0', '2022/11/11 15:15:50'),
('Samuel', 'Gatica', 'sgatica@analizar.com.ar', '0000', '1234', '0', '0', '2022/11/11 16:10:00');

-- -----------------------------------------------------
-- Medidores
-- -----------------------------------------------------
INSERT INTO `analizar`.`medidores` (`nombre`, `detalle`, `identificador`) VALUES
('Gralf GF-18WHM', 'Medidor Oficina', 'GLF120089'),
('Gralf GF-18WHM', 'Medidor Casa', 'GLF12228'),
('Gralf GF-18WHM', 'Medidor Casa', 'GLF456089'),
('Gralf GF-22WHM', 'Medidor Taller', 'GLF720089'),
('Gralf GF-18WHM', 'Medidor Oficina', 'GLF127047'),
('Gralf GF-18WHM', 'Medidor Oficina', 'GLF120001'),
('Gralf GF-18WHM', 'Medidor Casa', 'GLF189089'),
('Gralf GF-18WHM', 'Medidor Oficina', 'GLF120046');

-- -----------------------------------------------------
-- MisMedidores
-- -----------------------------------------------------
INSERT INTO `analizar`.`mismedidores` (`usuario`, `medidor`) VALUES
('2','1'), ('3','2'),('4','3'),('5','4'),
('6','5'), ('7','6'), ('8','7'), ('9','8');

