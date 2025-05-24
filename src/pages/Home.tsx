const Home = () => {
  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          I'm a passionate developer creating amazing digital experiences.
          Explore my work and get to know more about what I do.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "Node.js", "Tailwind CSS"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/projects" className="text-primary hover:text-secondary">
                View My Projects →
              </a>
            </li>
            <li>
              <a href="/contact" className="text-primary hover:text-secondary">
                Get in Touch →
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
