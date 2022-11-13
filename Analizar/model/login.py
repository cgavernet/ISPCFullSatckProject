import mysql.connector
from mysql.connector import Error

## Conexión a la base de datos
class Conectar():
    def __init__(self):
        try:
            self.conexion = mysql.connector.connect(
                host = 'localhost',
                database = 'analizar',
                user = 'root',
                password = ''
            )
            ## Conecto con la base de datos y imprimo si pude conectarme
            cursor= self.conexion.cursor()
            cursor.execute('select database();')
            record= cursor.fetchone()
            print(f'Se ha conectado a la base de datos: {record}')    

        except Error as e:
            print('No fue posible conectarse a la base de datos!', e)

# Valido los datos que el usuario ingreso
    def validarDataUser(self, nombre, password):
        self.nombre = nombre
        self.password = password

        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                querySQL = "select nombre, password from usuarios where nombre=%s and password=%s"
                data = (nombre, password)
                cursor.execute(querySQL, data)
                rows=cursor.fetchone()
                for row in rows:
                    print('Datos',row)
                self.conexion.commit()
                self.cursor.close()
                self.conexion.close()
                if(row[0] == nombre and row[1] == password):
                    print('El usuario existe')
            except:
                print('Fallo la conexion')

# Verifico si el usuario no es Administrador
    def verifyUser(self, nombre, password):
        self.nombre = nombre
        self.password = password
        #print('Ingrese su usuario y contraseña')
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                querySQL = "select nombre, password, admin from usuarios where nombre=%s and password=%s"
                data = (nombre, password)
                cursor.execute(querySQL, data)
                rows=cursor.fetchone()
                for row in rows:
                    print('Datos',row)
                self.conexion.commit()
                self.cursor.close()
                self.conexion.close()
                if(row[2] == 0):
                    print('No es un usuario administrador')
            except:
                print('Fallo la conexion')



# Verifico si el usuario es Administrador
    def verifyUserAdmin(self, nombre, password):
        self.nombre = nombre
        self.password = password
        #print('Ingrese su usuario y contraseña')
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                querySQL = "select nombre, password, admin from usuarios where nombre=%s and password=%s"
                data = (nombre, password)
                cursor.execute(querySQL, data)
                rows=cursor.fetchone()
                for row in rows:
                    print('Datos',row)
                self.conexion.commit()
                self.cursor.close()
                self.conexion.close()
                if(row[2] == 1):
                    print('Es un usuario administrador')
            except:
                print('Fallo la conexion')

#Valido datos
user = Conectar()    
user.getUserAdmin(nombre='Admin', password=1234)