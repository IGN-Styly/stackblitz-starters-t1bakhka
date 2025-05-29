import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center">
      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-light leading-tight text-primary">
              Edição de
              <br />
              Imagem
            </h1>

            <p className="text-lg leading-relaxed text-muted-foreground max-w-lg text-justify">
              A Edição é a alteração/manuseamento de determinado conteúdo tendo
              por seu documento pessoal objectivo um uso determinado.
              Habitualmente o termo é mais relacionado com a edição de texto, ou
              a transformação de um manuscrito em formato comercializável e
              reprodutível, como um livro.
            </p>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/ps.png"
                quality={100}
                alt="Image editing software screenshots showing photo editing applications"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl border"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
