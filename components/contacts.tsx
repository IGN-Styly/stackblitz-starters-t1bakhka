import Image from "next/image";

export default function Contacts() {
  return (
    <div className="">
      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-7xl font-light leading-tight text-primary">
              Contactos
            </h1>

            <p className="text-lg leading-relaxed text-muted-foreground max-w-lg">
              Localidade: Braga, Portugal, Escola Secundária Sá de Miranda{" "}
              <br />
              Telefone: 253 200 980
            </p>
          </div>
          <div className="width: 100%">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.5742383527413!2d-8.420827923450641!3d41.55681498546814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd24feeb82a77e57%3A0x6be9135bed346e47!2sEscola%20Secund%C3%A1ria%20S%C3%A1%20de%20Miranda!5e0!3m2!1sen!2spt!4v1748533713416!5m2!1sen!2spt"
              width="600"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
