export default function Pix() {
  return (
    <div className="">
      <div className="max-w-4xl mx-auto px-8 py-16">
        <h1 className=" text-5xl font-normal mb-16 leading-tight">
          Imagem Raster e Imagem vectorial
        </h1>

        <div
          className="space-y-8  text-lg leading-relaxed text-justify
"
        >
          <p>
            Uma imagem digital é qualquer imagem que conseguimos ver num ecrã,
            como no computador, telemóvel ou televisão. Estas imagens podem ser
            criadas de duas formas diferentes: através de píxels ou através de
            formas geométricas geradas por fórmulas matemáticas.
          </p>

          <p>
            As imagens feitas com píxels (também chamadas imagens raster) são
            como um mosaico: cada pequeno quadrado da imagem é um píxel com uma
            determinada cor. Quando juntamos milhares ou milhões desses
            quadrados, conseguimos ver a imagem completa. No entanto, se
            aumentarmos demasiado este tipo de imagem, ela começa a perder
            qualidade e fica com os quadrados visíveis — é o que chamamos de
            &quotpixelizada&quot.
          </p>

          <p>
            As imagens vectoriais funcionam de maneira diferente. Em vez de
            usarem píxels, são criadas com linhas, curvas e formas que seguem
            cálculos matemáticos. Isso permite aumentar ou reduzir o tamanho da
            imagem sem que esta perca qualidade. Por isso, são ideais para
            logótipos, ícones ou ilustrações simples.
          </p>
        </div>
      </div>
    </div>
  );
}
