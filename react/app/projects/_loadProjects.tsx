"use client";

import { useEffect, useState } from "react";
import Project from "./_project";

export default function LoadProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const loadProjects = async () => {
      const response = await fetch("http://localhost:8080/api/proyecto");
      const data = await response.json();
      console.log(data);
      setProjects(data);
    };
    loadProjects();
  }, []);

  return (
    <div>
      <ul>
        {projects.map((project, index) => (
          <Project
            key={index}
            nombre={project.nombre}
            cliente={project.cliente}
            fecha_inicio={project.fecha_inicio}
            fecha_fin={project.fecha_fin}
            index={index}
            users={project.trabajadores}
          />
        ))}
      </ul>
    </div>
  );
}
