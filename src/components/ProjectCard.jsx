import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <li className="border rounded-2xl overflow-hidden bg-white hover:shadow transition">
      <Link to={`/projects/${project.id}`}>
        <img
          src={project.image}
          alt={project.title}
          className="h-40 w-full object-cover"
        />
        <div className="p-4 space-y-2">
          <h3 className="font-semibold">{project.title}</h3>
          <p className="text-sm text-gray-600 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {project.tags?.map((t) => (
              <span
                key={t}
                className="text-xs bg-gray-100 px-2 py-1 rounded-full"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </li>
  );
}
