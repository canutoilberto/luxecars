import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Sobre a LuxeCars</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-semibold mb-4">Nossa História</h2>
          <p className="mb-4">
            Fundada em 2010, a LuxeCars nasceu da paixão por carros de luxo e do
            desejo de proporcionar experiências únicas aos nossos clientes.
            Começamos com apenas três veículos em nossa frota e, hoje,
            orgulhamo-nos de oferecer mais de 50 carros de luxo e
            superesportivos.
          </p>
          <p>
            Nossa missão é simples: proporcionar a melhor experiência de aluguel
            de carros de luxo, combinando veículos excepcionais com um serviço
            de atendimento ao cliente incomparável.
          </p>
        </div>
        <div className="relative h-64 md:h-96">
          <Image
            src="https://images.unsplash.com/photo-1696581081928-2d84c0c384d6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="LuxeCars Showroom"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      <h2 className="text-3xl font-semibold mb-8 text-center">
        Nossos Valores
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          {
            title: "Excelência",
            description:
              "Buscamos a perfeição em cada detalhe, desde a manutenção dos nossos veículos até o atendimento ao cliente.",
          },
          {
            title: "Inovação",
            description:
              "Estamos sempre atualizando nossa frota com os modelos mais recentes e tecnologicamente avançados.",
          },
          {
            title: "Confiabilidade",
            description:
              "Nossos clientes podem contar com um serviço consistente e de alta qualidade em todas as interações.",
          },
        ].map((value, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{value.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{value.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-semibold mb-4">
          Pronto para Experimentar o Luxo?
        </h2>
        <p className="mb-8">
          Não espere mais para viver a experiência de dirigir o carro dos seus
          sonhos. Nossa equipe está pronta para tornar sua viagem inesquecível.
        </p>
        <Button size="lg">Faça sua Reserva</Button>
      </div>

      <div className="bg-secondary p-8 rounded-lg">
        <h2 className="text-3xl font-semibold mb-4 text-center">Contate-nos</h2>
        <p className="text-center mb-4">
          Estamos aqui para responder a todas as suas perguntas e ajudá-lo a
          escolher o veículo perfeito para sua ocasião especial.
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="outline">Enviar E-mail</Button>
          <Button variant="outline">Ligar Agora</Button>
        </div>
      </div>
    </div>
  );
}
