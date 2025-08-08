import { Menu, User } from "lucide-react";
import { Link } from "react-router-dom";

type NavbarProps = {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
};

const Navbar = ({ searchTerm, setSearchTerm }: NavbarProps) => {
  return (
    <nav className="bg-zinc-900 text-white shadow-md shadow-black/40 sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Menú hamburguesa + Logo */}
        <div className="flex items-center gap-3">
          <Menu className="w-6 h-6 text-white cursor-pointer hover:opacity-80" />
          <Link to="/" className="text-xl sm:text-2xl font-semibold tracking-tight">
            YouTube Music
          </Link>
        </div>

        {/* Buscador */}
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar"
          className="bg-gray-900 px-4 py-2 rounded"
        />

        {/* Icono de cuenta */}
        <User className="w-6 h-6 text-white cursor-pointer hover:opacity-80" />
      </div>
    </nav>
  );
};

export default Navbar;
