import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">LuxeCars</h3>
            <p className="text-sm text-muted-foreground">
              Oferecendo a melhor experiência em locação de veículos de luxo
              desde 2023.
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/vehicles" className="text-sm hover:text-primary">
                  Veículos
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-primary">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-primary">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Contato</h4>
            <p className="text-sm text-muted-foreground">
              Rua das Luxúrias, 123
              <br />
              Cidade Alta, SP 00000-000
              <br />
              Tel: (11) 1234-5678
              <br />
              Email: contato@luxecars.com
            </p>
          </div>
          <div>
            <h4 className="text-md font-semibold mb-4">Siga-nos</h4>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          © 2023 LuxeCars. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
