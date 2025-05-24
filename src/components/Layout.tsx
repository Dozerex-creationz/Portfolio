import { NavLink, Outlet } from "react-router-dom";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";

const Layout = () => {
  const handleResumeDownload = () => {
    // Replace this URL with your actual resume file URL
    const resumeUrl = "/resume.pdf";
    window.open(resumeUrl, "_blank");
  };

  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex space-x-8">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/projects" className="nav-link">
                Projects
              </NavLink>
              <NavLink to="/stories" className="nav-link">
                Stories
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </div>
            <button
              onClick={handleResumeDownload}
              className="btn btn-primary flex items-center space-x-2"
            >
              <DocumentArrowDownIcon className="h-5 w-5" />
              <span>Resume</span>
            </button>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
