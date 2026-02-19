import { useState, useEffect } from "react";

export default function AddUser() {
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    nombre: "",
    rol: "",
    seniority: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del nuevo trabajador al backend

    setUser({
      nombre: event.target.nombre.value,
      rol: event.target.rol.value,
      seniority: event.target.seniority.value,
    });

    try {
      const response = await fetch("http://localhost:8080/api/trabajador", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: event.target.nombre.value,
          rol: event.target.rol.value,
          seniority: event.target.seniority.value,
        }),
      });
      if (!response.ok) {
        throw new Error("Error al agregar el trabajador");
      }

      alert("Trabajador agregado exitosamente");
      event.target.reset();
    } catch (error) {
      console.error("Error adding user:", error);
      setError(true);
    }

    event.target.reset();
  }
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6">Agregar Nuevo Trabajador</h2>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="nombre"
            type="text"
            placeholder="Nombre del trabajador"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="rol"
          >
            Rol
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="rol"
          >
            <option value="">Selecciona el rol</option>
            <option value="Desarrollador">backend</option>
            <option value="Diseñador">frontend</option>
            <option value="Gerente">diseñador</option>
            <option value="Gerente">otro</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="seniority"
          >
            Seniority
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="seniority"
          >
            <option value="">Selecciona la seniority</option>
            <option value="Junior">junior</option>
            <option value="Mid">semisenior</option>
            <option value="Senior">senior</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Agregar Trabajador
          </button>
        </div>
      </form>
    </div>
  );
}
