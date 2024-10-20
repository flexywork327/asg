import React from "react";
import { Menu, X } from "lucide-react";
import logo from "./asset/img.jpg";
import Register from "./component/register";
import ASG from "./asset/ASG_logo.jpg";

function App() {
  const handleProgramme = () => {
    console.log("Programme");
    const fileUrl = `${import.meta.env.VITE_REACT_APP_PUBLIC_URL}/ASG.pdf`;
    console.log(fileUrl);
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "programme.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold">
                <img src={ASG} alt="logo" className="h-10 w-10" />
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <section className="flex space-x-4 justify-between pr-5">
                <Register />

                <button
                  className="bg-[#041653] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                  onClick={handleProgramme}>
                  Programme
                </button>
              </section>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-gray-900 focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <section className="flex flex-col p-4 space-y-4">
              <Register />

              <button
                className="bg-[#041653] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                onClick={handleProgramme}>
                Programme
              </button>
            </section>
          </div>
        )}
      </nav>

      {/* Body content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="w-full mt-8 lg:mt-0">
              <img
                src={logo}
                alt="Landing page illustration"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#041653] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              {/* <span className="text-xl font-bold">
                <img src={ASG} alt="logo" className="h-10 w-10" />
              </span> */}
            </div>
            <div className="flex space-x-4">
              <div className="mt-8 text-center text-gray-400">
                &copy; 2024 ASG.
              </div>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              {/* &copy; 2024 ASG. */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
