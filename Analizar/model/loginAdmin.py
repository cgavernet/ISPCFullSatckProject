## Importo el modulo mysql.connector
from multiprocessing.dummy import connection
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

#Selecciono el usuario Administrador
    def getUserAdmin(self, nombre, password):
        self.nombre = nombre
        self.password = password
        print('Ingrese su usuario y contraseña')
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                querySQL = "select nombre, password from usuarios where nombre='Admin' and password=1234"
                cursor.execute(querySQL)
                rows=cursor.fetchone()
                for row in rows:
                    print('Datos',row)
            except:
                print('Fallo la conexion')

user = Conectar()    
user.getUserAdmin(nombre='Admin', password=1234)

