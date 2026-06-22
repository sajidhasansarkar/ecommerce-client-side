
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";




const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default MainLayout;