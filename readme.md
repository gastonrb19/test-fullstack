# Ejecución del código
Esta es mi prueba para el puesto fullstack.
Se utilizó React/Next y Express con TypeScript.

Con pnpm run dev se puede utilizar tanto el backend como el frontend.

Sugiero poblar datos con anterioridad desde el backend para visualizar.

Además se utilizó espacio en memoria para realizar una copia de base de datos.

# Decisiones técnicas
Estructura →
Copié cierta estructura de NestJS, ya que creo que es una gran estructura para ordenar un proyecto.

# Priorizo →

El uso de chequeo en los errores básicos.

El uso de clases para el chequeo que no hayan errores o tipo de datos no esperados.

# Quedó fuera →

Mejores validaciones.

Alto rendimiento.

Validar los usuarios iguales.

Reload de página.

Mejoras (próxima versión)

# Qué mejoraría →

Agregar atomización.

Mayor posibilidad de roles a los usuarios.

Le agregaría tareas a los proyectos.

Reload a las páginas.

Validaciones en React.

Mejora en los tipos de dato.

# Qué agregaría →

Identificadores únicos a las entidades.

Mayor atomización de la base de datos mediante 3ra forma normal.

Nuevos endpoints para mayor manejo de los datos.

# Qué cambiaría →

El nombre separado.

Que tenga un ID más identificable.

# Explicación conceptual

# ¿Cómo escalar si fueran 10.000 proyectos?
Agregar base de datos, métodos más robustos como creación mediante seeds y procedures, y atomización para no repetir información.

# ¿Qué cambiaría si fueran múltiples usuarios al mismo tiempo?
Uso de proxies para que puedan visualizar las tareas en tiempo real.

# ¿Cómo agregaría permisos de rol?
Agregaría una tabla para los permisos de cada rol según tipo de usuario.

Requerimientos funcionales
Entidades

Proyecto:

nombre

cliente

fecha de inicio

fecha de término

lista de trabajadores asignados

Trabajador:

nombre

rol

seniority

Funcionalidades mínimas

Crear proyecto

Crear trabajadores

Asignar trabajadores a un proyecto

Listar proyectos con sus trabajadores asociados

Funcionalidades extras

Chequear si existe un trabajador para asignar al proyecto

Chequear si existe un proyecto para asignar un trabajador

Listar trabajadores

# REST API Endpoints
Chequear proyectos
GET http://localhost:8080/api/proyecto

Crear proyectos
POST http://localhost:8080/api/proyecto

json
{
  "nombre": "Sistema de Facturación",
  "cliente": "Empresa XYZ",
  "fecha_inicio": "2024-02-19",
  "fecha_fin": "2024-06-19",
  "trabajadores": [
    {
      "nombre": "María García",
      "rol": "frontend",
      "seniority": "semisenior"
    }
  ]
}
Crear trabajador
POST http://localhost:8080/api/trabajador

Agregar usuario a proyecto
POST http://localhost:8080/api/proyecto/addTrabajador

json
{
  "nombre": "Sistema de Facturación",
  "trabajador": {
    "nombre": "gtn",
    "rol": "backend",
    "seniority": "senior"
  }
}
Chequear si existe trabajador
GET http://localhost:8080/api/trabajador/gtn

Listar trabajadores
GET http://localhost:8080/api/trabajadores