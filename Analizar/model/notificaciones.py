import mysql.connector
import time

class Alerta:
    def __init__(self):
        try:
            self.conexion = mysql.connector.connect(
                host='localhost',
                port='3306',
                user='root',
                password='pass',
                db='nameDb')
            
        except mysql.connector.Error as descriptionError:
            print('Error al conectarse a la base de datos!',descriptionError)
    
    def crearAlerta(self,medidor,valor):
        if(self.conexion.is_connected()):
            try:
                self.cursor = self.conexion.cursor()
                sql_sentencia = "INSERT INTO alertas(medidor,valor,fechaAlta) VALUES(%s,%s,%s)"
                fechaAlta = time.strftime("%Y/%m/%d %H:%M:%S")
                data = (medidor,valor,fechaAlta)
                self.cursor.execute(sql_sentencia,data)
                self.conexion.commit()
                self.cursor.close()
                self.conexion.close()
                print('Alerta creada con éxito!')
            except:
                print('No se pudo crear la alerta!')
    
    def modificarAlerta(self,identificador,medidor,valor):
        if(self.conexion.is_connected()):
            try:
                self.cursor = self.conexion.cursor()
                sql_sentencia = "UPDATE alertas SET medidor = %s, SET valor = %s WHERE idalerta = %s"
                data = (medidor,valor,identificador)
                self.cursor.execute(sql_sentencia,data)
                self.conexion.commit()
                self.cursor.close()
                self.conexion.close()
                print('Alerta modificada con éxito!')
            except:
                print('No se pudo modificar la alerta!')
    
    def eliminarAlerta(self,identificador):
        if(self.conexion.is_connected()):
            try:
                self.cursor = self.conexion.cursor()
                sql_sentencia = "DELETE FROM alertas WHERE idalerta = %s"
                data = (identificador)
                self.cursor.execute(sql_sentencia,data)
                self.conexion.commit()
                self.cursor.close()
                self.conexion.close()
                print('Alerta borrada con éxito!')
            except:
                print('No se pudo borrar la alerta!')
    
    def listarAlerta(self, identificador):
        if(self.conexion.is_connected()):
            try:
                self.cursor = self.conexion.cursor()
                sql_sentencia = "SELECT * FROM alertas WHERE idalerta = %s"
                data = (identificador)
                self.cursor.execute(sql_sentencia,data)
                resultado = self.cursor.fetchone()
                self.cursor.close()
                self.conexion.close()
                print('Alerta encontrada!')
                return resultado
            except:
                print('No se pudo encontrar la alerta!')
    
    def listarTodasLasAlertas(self):
        if(self.conexion.is_connected()):
            try:
                self.cursor = self.conexion.cursor()
                sql_sentencia = "SELECT * FROM alertas"
                self.cursor.execute(sql_sentencia)
                resultado = self.cursor.fetchall()
                self.cursor.close()
                self.conexion.close()
                print('Alertas listadas!')
                return resultado
            except:
                print('No se pudo listar las alertas!')