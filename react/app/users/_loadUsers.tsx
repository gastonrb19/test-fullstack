"use client";

enum Rol {
  BACK = "backend",
  FRONT = "frontend",
  DESIGN = "diseño",
  OTRO = "otro",
}

enum Seniority {
  JUNIOR = "junior",
  SEMISENIOR = "semisenior",
  SENIOR = "senior",
}

interface User {
  nombre: string;
  rol: Rol;
  seniority: Seniority;
}

import { useEffect, useState } from "react";

export default function LoadUsers({ projectname }) {
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/trabajadores");
      const data = await response.json();
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
      setError(true);
    }
  };

  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  async function handleUserSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedIndex = event.target.value;
    const user = users[Number(selectedIndex)];
    setSelectedUser(user);
  }

  async function handleAddUser(event: React.MouseEvent<HTMLButtonElement>) {
    if (!selectedUser) return;
    try {
      console.log("Usuario seleccionado:", selectedUser);
      const response = await fetch(
        `http://localhost:8080/api/proyecto/addTrabajador`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre: projectname,
            trabajador: selectedUser,
          }),
        },
      );
      if (!response.ok) {
        throw new Error("Error al asignar el usuario al proyecto");
      }

      console.log("Usuario asignado correctamente");
      alert(
        `Usuario ${selectedUser.nombre} asignado al proyecto ${projectname}`,
      );
    } catch (error) {
      console.error("Error al asignar el usuario:", error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);
  if (error) {
    return (
      <div className="text-center text-sm font-light text-red-500">
        Error al cargar los usuarios
      </div>
    );
  }
  return (
    <div className="ml-2  flex flex-col gap-2 mt-4 w-1/3">
      <select
        onChange={handleUserSelect}
        className="text-center text-red-500 border-gray-400 border-1 rounded-sm"
      >
        <option value="$">-- seleccionar --</option>
        {users.map((user, index) => (
          <option key={index} value={index}>
            {user.nombre}
          </option>
        ))}
      </select>
      <button
        onClick={handleAddUser}
        className="bg-blue-900 px-1 border-sm hover:bg-blue-700 duration-300"
      >
        Agregar usuario
      </button>
    </div>
  );
}
