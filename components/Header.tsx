import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] overflow-hidden">
      <Image
        src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Luxury car on a scenic road"
        layout="fill"
        objectFit="cover"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 md:mb-6">
          Experimente o Luxo em Movimento
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white mb-6 md:mb-8 max-w-2xl">
          Alugue os carros mais exclusivos e viva momentos inesquecíveis
        </p>
        <Button size="lg" className="text-lg px-8 py-6">
          Reserve Agora
        </Button>
      </div>
    </header>
  );
}
