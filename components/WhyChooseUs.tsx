import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Shield, Clock, ThumbsUp } from "lucide-react";
import Link from "next/link";

const reasons = [
  {
    icon: Star,
    title: "Frota Premium",
    description:
      "Oferecemos apenas os veículos mais luxuosos e bem-mantidos do mercado.",
  },
  {
    icon: Shield,
    title: "Segurança Garantida",
    description:
      "Todos os nossos carros passam por rigorosas inspeções de segurança.",
  },
  {
    icon: Clock,
    title: "Serviço 24/7",
    description:
      "Suporte ao cliente disponível 24 horas por dia, 7 dias por semana.",
  },
  {
    icon: ThumbsUp,
    title: "Experiência Personalizada",
    description:
      "Adaptamos nossos serviços para atender às suas necessidades específicas.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Por que nos escolher
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="flex flex-col items-center text-center"
            >
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-4">
                  <reason.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle>{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{reason.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">
            Pronto para experimentar o luxo?
          </h3>
          <Button size="lg" className="text-lg px-8 py-6">
            <Link href="/vehicles">Reserve seu carro de luxo agora</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
