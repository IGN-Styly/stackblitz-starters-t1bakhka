import Link from 'next/link';
import { SiAffinityphoto } from 'react-icons/si';
import { SiGimp } from 'react-icons/si';
import { SiPhotopea } from 'react-icons/si';
import { SiAdobephotoshop } from 'react-icons/si';

export default function ImageEditors() {
  return (
    <div className=" ">
      <div className="max-w-4xl mx-auto ">
        {/* Main Title */}
        <h1 className=" text-5xl font-light text-center mb-16">
          Editores de Imagem
        </h1>

        {/* Grid of Image Editors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Affinity Photo */}
          <div className="flex flex-col items-center text-center">
            <Link
              href="https://affinity.serif.com/en-gb/photo"
              className="w-20 h-20 mb-6  rounded-lg flex items-center justify-center"
            >
              <SiAffinityphoto className="w-20 h-20" />
            </Link>
            <h2 className=" text-xl font-medium mb-4">Affinity Photo</h2>
            <p
              className="text-black text-sm leading-relaxed max-w-xs text-justify
"
            >
              Uma poderosa aplicação de edição profissional com suporte a
              ficheiros RAW, camadas e ferramentas avançadas. Ideal para
              designers e fotógrafos que procuram uma alternativa ao Photoshop
              sem mensalidades.
            </p>
          </div>

          {/* GNU GIMP */}
          <div className="flex flex-col items-center text-center">
            <Link
              href="https://www.gimp.org/"
              className="w-20 h-20 mb-6 flex items-center justify-center"
            >
              <SiGimp className="w-20 h-20" />
            </Link>
            <h2 className=" text-xl font-medium mb-4">GNU GIMP</h2>
            <p
              className="text-black text-sm leading-relaxed max-w-xs text-justify
"
            >
              Editor de imagem gratuito e de código aberto. Apesar de ser menos
              intuitivo que o Photoshop, oferece muitas funcionalidades
              avançadas e é altamente personalizável.
            </p>
          </div>

          {/* Photopea */}
          <div className="flex flex-col items-center text-center">
            <Link
              href="https://www.photopea.com/"
              className="w-20 h-20 mb-6 rounded-lg flex items-center justify-center"
            >
              <SiPhotopea className="w-20 h-20" />
            </Link>
            <h2 className=" text-xl font-medium mb-4">Photopea</h2>
            <p
              className="text-black text-sm leading-relaxed max-w-xs text-justify
"
            >
              Editor de imagem online gratuito que funciona diretamente no
              navegador. Suporta ficheiros PSD, XCF, e Sketch — perfeito para
              edições rápidas sem instalar programas.
            </p>
          </div>

          {/* Adobe Photoshop */}
          <div className="flex flex-col items-center text-center">
            <Link
              href="https://www.adobe.com/pt/products/photoshop.html"
              className="w-20 h-20 mb-6  rounded-lg flex items-center justify-center"
            >
              <SiAdobephotoshop className="w-20 h-20" />
            </Link>
            <h2 className=" text-xl font-medium mb-4">Adobe Photoshop</h2>
            <p
              className="text-black text-sm leading-relaxed max-w-xs text-justify
"
            >
              O editor de imagem mais conhecido do mundo, usado por
              profissionais para edição de fotos, design gráfico e criação
              digital. Oferece ferramentas completas e integração com o Adobe
              Creative Cloud.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
