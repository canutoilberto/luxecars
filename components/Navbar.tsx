"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Car, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/vehicles", label: "Veículos" },
    { href: "/about", label: "Sobre" },
    { href: "/contact", label: "Contato" },
  ];

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        {/* Logomarca */}
        <Link href="/" className="flex items-center space-x-2">
          <Car className="h-6 w-6" />
          <span className="text-xl font-bold">LuxeCars</span>
        </Link>

        {/* Menu de navegação para desktop */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-primary">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Theme switch para desktop */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleTheme}
          className="hidden md:inline-flex"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Alternar tema</span>
        </Button>

        {/* Menu hambúrguer para mobile */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px]">
            <nav className="flex flex-col space-y-4 mt-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {/* Theme switch dentro do menu mobile */}
              <div className="flex items-center justify-between pt-4">
                <span className="text-lg">Tema</span>
                <Button variant="ghost" size="icon" onClick={toggleTheme}>
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Alternar tema</span>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
