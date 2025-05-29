export default function Fmt() {
  const formats = [
    {
      title: 'SVG',
      description:
        'Formato vetorial. Pode ser redimensionado sem perder qualidade. Usado para ícones e gráficos web.',
    },
    {
      title: 'AI',
      description:
        'Ficheiro vetorial nativo do Adobe Illustrator. Ideal para logótipos e ilustrações escaláveis.',
    },
    {
      title: 'BMP',
      description:
        'Formato animado ou estático. Suporta transparência, mas tem pouca profundidade de cor.',
    },
    {
      title: 'TIFF',
      description:
        'Alta qualidade e sem compressão. Muito usado em impressão e digitalização profissional.',
    },
    {
      title: 'PNG',
      description:
        'Formato comprimido sem perda de qualidade. Suporta transparência. Muito usado na web.',
    },
    {
      title: 'GIF',
      description:
        'Formato animado ou estático. Suporta transparência, mas tem pouca profundidade de cor.',
    },
    {
      title: 'PSD',
      description:
        'Ficheiro nativo do Adobe Photoshop. Suporta camadas, transparência, efeitos e edição avançada.',
    },
    {
      title: 'JPEG',
      description:
        'Formato comprimido. Boa qualidade com tamanho reduzido. Ideal para fotografias.',
    },
  ];

  return (
    <div className="">
      <div className="max-w-4xl mx-auto">
        <h1 className=" text-4xl font-normal mb-16 text-center">
          Formatos de Imagem
        </h1>

        <div className="grid grid-cols-2 gap-x-16 gap-y-12">
          {formats.map((format, index) => (
            <div key={index} className="space-y-3">
              <h2 className=" text-xl font-semibold">{format.title}</h2>
              <p
                className=" text-sm leading-relaxed text-justify
"
              >
                {format.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
