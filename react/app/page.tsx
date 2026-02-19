import Link from "next/link";

export default function Home() {
  return (
    <>
    <div>
      <h1 className="text-center text-3xl font-bold mt-10">Test project</h1>
    </div>
    <div className="grid grid-cols-2 mx-auto text-center mt-10 gap-4 w-2/3">
      <Link className="bg-gray-900 hover:bg-blue-800 duration-300 p-4 block text-center rounded-sm" href="/users">Trabajadores</Link>
      <Link className="bg-gray-900 hover:bg-blue-800 duration-300 p-4 block text-center rounded-sm" href="/projects">Proyectos</Link>
    </div>
    </>
  )
}
