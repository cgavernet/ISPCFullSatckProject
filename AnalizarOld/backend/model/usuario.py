import mysql.connector
import time

class Usuario:
    def __init__(self):
        try:
            self.conexion = mysql.connector.connect(
                host='localhost',
                port='3306',
                user='root',
                password='1234',
                db='analizar')
            
        except mysql.connector.Error as descriptionError:
            print('Error al conectarse a la base de datos!',descriptionError)

    def nuevoUsuario(self, nombre, apellido, email, celular, password, habilitado, admin, fechaAlta):
        if(self.conexion.is_connected()):
                try:
                    self.cursor = self.conexion.cursor()
                    sql_sentencia = "INSERT INTO usuarios(nombre, apellido, email, celular, password, habilitado, admin, fechaAlta) VALUES(%s,%s,%s,%s,%s,%i,%i,%s)"
                    fechaAlta = time.strftime("%Y/%m/%d %H:%M:%S")
                    data = (nombre, apellido, email, celular, password, habilitado, admin, fechaAlta, fechaAlta)
                    self.cursor.execute(sql_sentencia,data)
                    self.conexion.commit()
                    self.cursor.close()
                    self.conexion.close()
                    print('Usuario cargado con éxito!')
                except:
                    print('No se pudo cargar el usuario!')

    def modificarUsuario(self, idusuario, nombre, apellido, email, celular, password):
            if(self.conexion.is_connected()):
                try:
                    self.cursor = self.conexion.cursor()
                    sql_sentencia = "UPDATE usuarios SET nombre = %s, apellido = %s, email = %s, celular = %s, password = %s,  WHERE idusuario = %s"
                    data = (idusuario, nombre, apellido, email, celular, password)
                    self.cursor.execute(sql_sentencia,data)
                    self.conexion.commit()
                    self.cursor.close()
                    self.conexion.close()
                    print('Datos de usuario modificados con éxito!')
                except:
                    print('No se pudo modificar los datos del Usuario!')

    def borrarUsuario(self,idusuario):
            if(self.conexion.is_connected()):
                try:
                    self.cursor = self.conexion.cursor()
                    sql_sentencia = f"DELETE FROM usuarios WHERE idusuario = {idusuario}"
                    self.cursor.execute(sql_sentencia)
                    self.conexion.commit()
                    self.cursor.close()
                    self.conexion.close()
                    print('Usuario borrado con éxito!')
                except:
                    print('No se pudo borrar el Usuario!')

    def listarUsuario(self, idusuario):
            if(self.conexion.is_connected()):
                try:
                    self.cursor = self.conexion.cursor()
                    sql_sentencia = f"SELECT * FROM usuarios WHERE idusuario = {idusuario}"
                    self.cursor.execute(sql_sentencia)
                    resultado = self.cursor.fetchall()
                    self.cursor.close()
                    self.conexion.close()
                    print('Usuario encontrado!')
                    print(resultado)
                    return True
                except:
                    print('Usuario Inexistente!')
                    return False

    def convertirEnAdmin(self, idusuario):
        if(self.conexion.is_connected()):
                try:
                    self.cursor = self.conexion.cursor()
                    sql_sentencia = "UPDATE usuarios SET admin = %s WHERE idusuario = %s"
                    data = ('1', idusuario)
                    self.cursor.execute(sql_sentencia,data)
                    self.conexion.commit()
                    self.cursor.close()
                    self.conexion.close()
                    print('Uusario convertido en Administrador!')
                    return True
                except:
                    print('No se pudo convertir el Usuario en Administrador!')
                    return False

