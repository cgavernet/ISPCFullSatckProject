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
                sql_sentencia = "SELECT consumo, fechamedicion FROM consumos WHERE medidor = %s AND fechamedicion >= CAST( %s AS DATE) AND fechamedicion <= CAST(%s AS DATE)"
                data = (idmedidor, fechainicio, fechafin)
                self.cursor.execute(sql_sentencia, data)
                resultados = self.cursor.fetchall()
                self.cursor.close()
                self.conexion.close()
                return resultados
            except:
                print('No hay datos que mostrar')
                return False

#Valido datos
gr = Graficos()    
print(gr.datosMedidor(2, '2022-02-01', '2022-10-15'))