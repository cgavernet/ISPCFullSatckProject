# CRUD para comentarios de usuarios de la página "inicio"
import mysql.connector

class Conectar():
    def __init__(self):
        try:
            self.conexion = mysql.connector.connect(
                host = 'localhost',
                port = 3306,
                user = 'root',
                password = 'dpozzo2022',
                db = 'analizar'
            )
        except mysql.connector.Error as descriptionError:
            print('Error al conectarse a la base de datos!',descriptionError)
    
    # CREATE comentario
    def insertarComentario(self, autor, comentario, fecha):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentencia_SQL = "INSERT INTO comentarios(autor, comentario, fecha) VALUES(%s,%s,%s)"
                data = (autor, comentario, fecha)
                cursor.execute(sentencia_SQL, data)
                self.conexion.commit()
                self.conexion.close()              
            except:
                print("No se pudo realizar la conexión a la base de datos. Reintente o corrija el error.")

    # READ comentario
    def buscarComentario(self, autor):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentencia_SQL = f"SELECT * FROM comentarios WHERE autor LIKE {autor}"
                cursor.execute(sentencia_SQL)
                resultadoREAD = cursor.fetchall()
                self.conexion.close()
                return resultadoREAD              
            except:
                print("No se pudo realizar la conexión a la base de datos. Reintente o corrija el error.")
    
    # UPDATE comentario
    def modificarComentario(self, idcomentario, autor,comentario):
        if self.conexion.is_connected():
            try:
                self.cursor = self.conexion.cursor()
                sentencia_SQL = "UPDATE comentarios SET comentario = %s, autor = %s WHERE idcomentario = %s"
                data = (idcomentario, comentario, autor)
                self.cursor.execute(sentencia_SQL,data)
                self.conexion.commit()
                self.cursor.close()
                self.conexion.close()
                print('Comentario modificado exitosamente')
            except:
                print("No se pudo realizar la modificación solicitada. Reintente o corrija el error.")

    # DELETE comentario
    def eliminarComentario(self, Id):
        if self.conexion.is_connected():
            try:
                cursor = self.conexion.cursor()
                sentencia_SQL = f"DELETE FROM comentarios WHERE {Id}"
                cursor.execute(sentencia_SQL)
                self.conexion.commit()
                self.conexion.close()
            except:
                print("No se pudo eliminar el comentario solicitado. Reintente o corrija el error.")

# NOTA: En función de que en el diseño original de nuestra aplicación no se contempló el acceso a la funcionalidad de efectuar CRUD's se decidió con el equipo de desarrollo contemplar dicha funcionalidad en la sección comentarios de usuarios de AnalizAr para poder validar mi desarrollo de este contenido curricular. Por lo tanto, no se encontrará en la base de datos ni en los diseños la tabla "comentarios". Gracias.