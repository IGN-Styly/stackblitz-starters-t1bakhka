import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/80 backdrop-blur-md border border-gray-200/30 rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center space-x-6">
          {/* Logo in pill */}
          <Link href={"/"}>
            <div className=" backdrop-blur-sm rounded-full p-1">
              <Image src="/school.png" alt="Logo" width={40} height={40} />
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/contacts"
              className="text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors"
            >
              Contactos
            </Link>
            <Link
              href="/fmts"
              className="text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors"
            >
              Formatos de Imagem
            </Link>
            <Link
              href="/editors"
              className="text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors"
            >
              Editores
            </Link>
            <Link
              href="/vecpix"
              className="text-gray-900 hover:text-gray-600 text-sm font-medium transition-colors"
            >
              Pixels e Vetores
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
