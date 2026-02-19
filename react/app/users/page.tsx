"use client";
import { useEffect, useState } from "react";
import AddUser from "./_addUser";
export default function Users() {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState(false);
  async function fetchUsers() {
    try {
      const response = await fetch("http://localhost:8080/api/trabajadores");
      const data = await response.json();
      console.log(data);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
      setErrors(true);
    }
  }
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <div>
        <h1 className="text-center text-3xl font-bold mt-10">Trabajadores</h1>
      </div>
      <div className="max-w-4xl mx-auto mt-10">
        {errors ? (
          <p className="text-red-500 text-center">Error fetching users.</p>
        ) : (
          users.map((user, index) => (
            <div
              key={index}
              className="border-2 border-gray-300 rounded-md p-4 mb-4"
            >
              <h3 className="text-lg font-semibold">{user.nombre}</h3>
              <p>Rol: {user.rol}</p>
              <p>Seniority: {user.seniority}</p>
            </div>
          ))
        )}
      </div>
      <AddUser />
    </>
  );
}
