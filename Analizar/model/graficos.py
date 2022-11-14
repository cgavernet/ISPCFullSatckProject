import mysql.connector


class Graficos:
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

    def datosMedidor(self, idmedidor, fechainicio, fechafin):
        if(self.conexion.is_connected()):
            try:
                self.cursor = self.conexion.cursor()
                sql_sentencia = f"SELECT consumo, fechamedicion FROM consumos WHERE medidor = {idmedidor} AND fechamedicion >= CAST({fechainicio} AS DATE) AND fechamedicion <= CAST({fechafin} AS DATE)"
                self.cursor.execute(sql_sentencia)
                resultados = self.cursor.fetchall()
                self.cursor.close()
                self.conexion.close()
                return resultados
            except:
                print('No hay datos que mostrar')
                return False