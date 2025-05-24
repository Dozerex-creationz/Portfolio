const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A brief description of project one and its key features.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "/project1.jpg",
      link: "#",
    },
    {
      id: 2,
      title: "Project Two",
      description: "A brief description of project two and its key features.",
      technologies: ["TypeScript", "Express", "PostgreSQL"],
      image: "/project2.jpg",
      link: "#",
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="h-48 bg-gray-200">
              {/* Replace with actual image */}
              <div className="w-full h-full flex items-center justify-center text-gray-500">
                [Project Image]
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-primary hover:text-secondary font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
