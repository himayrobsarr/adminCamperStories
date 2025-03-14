import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import campushm from '/src/assets/Campushm.png';

const Navbar = ({ handleButtonClick }) => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false); // Estado del menú hamburguesa

    const handleLogout = () => {
        logout();
        toast.success("Sesión cerrada correctamente");
        navigate("/login");
    };

    return (
        <>
            
            <nav className="hidden md:flex w-64 h-screen bg-[#1e1b4b] border-r border-white/10 flex-col pt-12 p-2 fixed left-0 top-0">
                <img src={campushm} alt="Campus" className="w-32 h-auto mx-auto -mb-2" />
                <h2 className="text-xl font-bold mb-4 text-center pt-1 text-white">Admin Panel</h2>
                <ul className="flex-1 flex flex-col justify-center items-center space-y-4">
                    <li><button onClick={handleButtonClick} className="w-40 py-2 px-4 rounded hover:bg-white/10 transition text-center text-white">Dashboard</button></li>
                    <li><button onClick={handleButtonClick} className="w-40 py-2 px-4 rounded hover:bg-white/10 transition text-center text-white">Users</button></li>
                    <li><button onClick={handleButtonClick} className="w-40 py-2 px-4 rounded hover:bg-white/10 transition text-center text-white">Settings</button></li>
                </ul>
                <button onClick={handleLogout} className="w-40 py-2 px-4 rounded bg-red-500 hover:bg-red-600 transition text-white mt-auto mb-4 mx-auto">Cerrar sesión</button>
            </nav>

            <nav className="md:hidden w-full bg-[#1e1b4b] text-white p-4 fixed top-0 left-0 relative z-20">
        
                <div className="flex justify-between items-center">
                    <img src={campushm} alt="Campus" className="w-20 h-auto" />
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                        </svg>
                    </button>
                </div>

                
                {isOpen && (
                    <div className="absolute top-[64px] right-4 w-60 bg-[#1e1b4b] border border-white/10 rounded-lg shadow-xl p-4 z-50 animate-fade-in-down">
                        <h2 className="text-xl font-bold mb-4 text-center pt-1">Admin Panel</h2>
                        <ul className="space-y-4 flex flex-col items-center">
                            <li><button onClick={handleButtonClick} className="w-40 py-2 px-4 rounded hover:bg-white/10 transition text-center">Dashboard</button></li>
                            <li><button onClick={handleButtonClick} className="w-40 py-2 px-4 rounded hover:bg-white/10 transition text-center">Users</button></li>
                            <li><button onClick={handleButtonClick} className="w-40 py-2 px-4 rounded hover:bg-white/10 transition text-center">Settings</button></li>
                        </ul>
                        <button onClick={handleLogout} className="w-40 py-2 px-4 rounded bg-red-500 hover:bg-red-600 transition text-white mt-6 mx-auto block">Cerrar sesión</button>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;