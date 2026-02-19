export default function User({ user }) {
  return (
    <div className="border-2 border-gray-300 rounded-md p-4 mb-4">
      <h3 className="text-lg font-semibold">{user.nombre}</h3>
      <p>Rol: {user.rol}</p>
      <p>Seniority: {user.seniority}</p>
    </div>
  );
}
