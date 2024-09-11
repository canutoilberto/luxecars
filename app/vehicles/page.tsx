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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const vehicles = [
  {
    name: "Ferrari 488 GTB",
    category: "Esportivo",
    image:
      "https://images.pexels.com/photos/16386035/pexels-photo-16386035/free-photo-of-vermelho-construcao-predio-edificio.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Potência e elegância em um só veículo.",
    price: "R$ 5.000/dia",
    specs: ["670 cv", "0-100 km/h em 3s", "Velocidade máxima: 330 km/h"],
  },
  {
    name: "Lamborghini Huracán",
    category: "Esportivo",
    image:
      "https://images.pexels.com/photos/17632045/pexels-photo-17632045/free-photo-of-cidade-meio-urbano-luxo-de-pe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Design agressivo e performance inigualável.",
    price: "R$ 5.500/dia",
    specs: ["640 cv", "0-100 km/h em 2.9s", "Velocidade máxima: 325 km/h"],
  },
  {
    name: "Rolls-Royce Phantom",
    category: "Luxo",
    image:
      "https://i.pinimg.com/originals/ea/c9/15/eac91546ef2ab258d73e076df200d6db.png",
    description: "O ápice do luxo e conforto automotivo.",
    price: "R$ 7.000/dia",
    specs: ["563 cv", "0-100 km/h em 5.3s", "Interior personalizado"],
  },
  {
    name: "Bentley Continental GT",
    category: "Luxo",
    image:
      "https://images.pexels.com/photos/11162481/pexels-photo-11162481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Elegância britânica com performance excepcional.",
    price: "R$ 6.000/dia",
    specs: ["626 cv", "0-100 km/h em 3.7s", "Interior artesanal"],
  },
  {
    name: "Porsche 911 GT3 RS",
    category: "Esportivo",
    image:
      "https://images.unsplash.com/photo-1683403792821-7542e25aadcf?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Precisão alemã para os amantes de velocidade.",
    price: "R$ 5.800/dia",
    specs: ["520 cv", "0-100 km/h em 3.2s", "Aerodinâmica avançada"],
  },
  {
    name: "Mercedes-Maybach S-Class",
    category: "Luxo",
    image:
      "https://images.pexels.com/photos/27414170/pexels-photo-27414170/free-photo-of-estrada-via-natureza-ensolarado.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Luxo executivo em sua forma mais refinada.",
    price: "R$ 6.500/dia",
    specs: ["496 cv", "0-100 km/h em 4.8s", "Interior ultra silencioso"],
  },
];

export default function VehiclesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Nossa Frota de Luxo
      </h1>

      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">Todos</TabsTrigger>
          <TabsTrigger value="esportivo">Esportivos</TabsTrigger>
          <TabsTrigger value="luxo">Luxo</TabsTrigger>
        </TabsList>
        {["all", "esportivo", "luxo"].map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vehicles
                .filter(
                  (vehicle) =>
                    category === "all" ||
                    vehicle.category.toLowerCase() === category
                )
                .map((vehicle) => (
                  <Card key={vehicle.name} className="overflow-hidden">
                    <CardHeader className="p-0">
                      <div className="relative h-48 md:h-64">
                        <Image
                          src={vehicle.image}
                          alt={vehicle.name}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle>{vehicle.name}</CardTitle>
                      <CardDescription>{vehicle.description}</CardDescription>
                      <ul className="mt-2 text-sm">
                        {vehicle.specs.map((spec, index) => (
                          <li key={index}>{spec}</li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center p-4">
                      <span className="text-lg font-semibold">
                        {vehicle.price}
                      </span>
                      <Button>Reservar</Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
