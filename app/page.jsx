import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Component
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";

function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Desarrollador de Software</span>
            <h1 className="h1">Hola Soy <br /><span className="text-accent">Mauricio Oropeza</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">Entusiasta en la Creacion de elegantes experiencias digitales,Competente  en lenguajes de programacion y otras tecnologias. Con gran capacidad de aprendizaje de nuevas herramientas y Emocionado por dar vida a futuros Proyectos.</p>
            {/* Btn and socials */}

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2">
                <span>Descarga mi CV</span>
                <FiDownload />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials containerStyles="flex gap-6" iconStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;