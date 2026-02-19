import { useState } from "react";
import LoadUsers from "../users/_loadUsers";

export default function Project({
  nombre,
  cliente,
  fecha_inicio,
  fecha_fin,
  index,
  users,
}) {
  const [display, setDisplay] = useState(false);
  return (
    <div key={index} className="border p-4 mb-4 rounded w-2/3 mx-auto">
      <h3 className="font-bold text-center text-cyan-900">{nombre}</h3>
      <p className="font-light">{cliente}</p>
      <p className="font-light">Comienzo proyecto :{fecha_inicio}</p>
      <p className="font-light">Termino proyecto : {fecha_fin}</p>
      {display && (
        <>
          <div className="mt-4 p-2 rounded">
            <p className="font-bold">Usuarios</p>
          </div>
          <div>
            {display && users?.length > 0
              ? users.map((user, index) => (
                  <div key={index} className="p-2 mb-2 rounded">
                    <p className="font-medium">
                      {" "}
                      | {user.nombre} {user.apellido}
                    </p>
                    <p className="font-light text-sm">{user.email}</p>
                  </div>
                ))
              : display && (
                  <p className="text-center text-sm font-light text-gray-500">
                    No hay usuarios asignados
                  </p>
                )}
            <LoadUsers projectname={nombre} />
          </div>
        </>
      )}

      <button
        className="text-center text-sm mt-2 font-extralight text-gray-600 block mx-auto bg-gray-900 hover:bg-gray-300 rounded px-4 py-1"
        onClick={() => setDisplay(!display)}
      >
        {display ? "Ocultar usuarios" : "Mostrar usuarios"}
      </button>
    </div>
  );
}
