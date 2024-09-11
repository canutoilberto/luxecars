import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const featuredCars = [
  {
    name: "Ferrari 488 GTB",
    image:
      "https://images.pexels.com/photos/16386035/pexels-photo-16386035/free-photo-of-vermelho-construcao-predio-edificio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Potência e elegância em um só veículo.",
    price: "R$ 5.000/dia",
  },
  {
    name: "Lamborghini Huracán",
    image:
      "https://images.pexels.com/photos/17632045/pexels-photo-17632045/free-photo-of-cidade-meio-urbano-luxo-de-pe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Design agressivo e performance inigualável.",
    price: "R$ 5.500/dia",
  },
  {
    name: "Rolls-Royce Phantom",
    image:
      "https://i.pinimg.com/originals/ea/c9/15/eac91546ef2ab258d73e076df200d6db.png",
    description: "O ápice do luxo e conforto automotivo.",
    price: "R$ 7.000/dia",
  },
];

export default function FeaturedCars() {
  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Nossos Destaques
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <Card key={car.name} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative h-48 md:h-64">
                  <Image
                    src={car.image}
                    alt={car.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle>{car.name}</CardTitle>
                <CardDescription>{car.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-4">
                <span className="text-lg font-semibold">{car.price}</span>
                <Button>Reservar</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
