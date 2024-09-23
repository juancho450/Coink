# Coink
Coink App

Para el desarrollo de esta app hay dos puntos a tener en cuenta:

1. "El usuario debe ser capaz de navegar entre pantallas solamente cuando los datos
introducidos por el usuario son validos." -> Respecto a este punto no me quedo claro si se debian manejar GUARDS y validar cuando se tuviera la data cargada para poder acceder o navegar entre pantallas, o deshabilitar los botones Siguiente hasta que se completara la informacion requerida para poder avanzar a la siguiente pantalla. En todo caso yo opte por la de deshabilitar el boton.

2. "Implementar un Spinner o Loader para el llamado de los servicios" -> Respecto a este punto el llamado del servicio no sirvio ya que retornaba un codigo 401 pero igual se creo el servicio y el llamado, al no haber respuesta del servidor exitosa, opte por crear un JSON para poder mockear la respuesta y continuar con el flujo

Los spinner los implemente de 2 maneras, es de mi costumbre crear un interceptor para que detecte y acumular los llamados y mostrar o no el spinner pero al no haber respuesta exitosa cree el interceptor pero comente la instancia para no usarlo, en este caso hice el llamado directamente desde el componente con un show y hide para cuando inicie y termine el llamado del servicio

Espero poder haber sido claro, quedo atento a cualquier inquietud y/o solicitud
Fue de mi agrado poder construir esta prueba tecnica.