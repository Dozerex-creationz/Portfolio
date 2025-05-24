const Stories = () => {
  const stories = [
    {
      id: 1,
      title: "My Journey in Tech",
      date: "March 15, 2024",
      excerpt:
        "How I started my journey in technology and what I've learned along the way.",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Building My First Web App",
      date: "March 10, 2024",
      excerpt:
        "The challenges and lessons learned while building my first full-stack application.",
      readTime: "8 min read",
    },
    // Add more stories as needed
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Stories & Blog</h1>
      <div className="space-y-6">
        {stories.map((story) => (
          <article key={story.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold text-gray-900">
                {story.title}
              </h2>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>{story.date}</span>
                <span>·</span>
                <span>{story.readTime}</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{story.excerpt}</p>
            <a
              href={`/stories/${story.id}`}
              className="text-primary hover:text-secondary font-medium inline-flex items-center"
            >
              Read More
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Stories;
