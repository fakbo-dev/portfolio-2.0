import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Component
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Desarrollador de Software</span>
            <h1 className="h1">Hola Soy <br /><span className="text-accent">Mauricio Oropeza</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">apasionado de la creación de experiencias digitales impactantes, poseo habilidades sólidas en diversos lenguajes de programación y tecnologías. Mi capacidad de aprendizaje es excepcional, lo que me permite adaptarme rápidamente a nuevas herramientas y tecnologías emergentes. Estoy emocionado por dar vida a futuros proyectos y colaborar en su desarrollo de manera innovadora y efectiva.</p>
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
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* Stats */}
      <Stats />
    </section>
  );
}

export default Home;