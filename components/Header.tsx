"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Button from "./ui/Button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Inicio", href: "#inicio" },
  { name: "Quiénes Somos", href: "#quienes-somos" },
  { name: "Servicios", href: "#servicios" },
  { name: "Colegios", href: "#colegios" },
  { name: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      )}
      role="banner"
    >
      <nav 
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2"
            aria-label="Scool Chef - Ir a inicio"
          >
            <div className="flex items-center">
              <Image
                src="/images/logos/scool-chef-logo.png"
                alt="Scool Chef"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "text-sm font-medium transition-colors duration-200 hover:text-primary-500",
                  isScrolled ? "text-neutral-700" : "text-white"
                )}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/pagos-almuerzo">
              <Button
                variant={isScrolled ? "outline" : "secondary"}
                size="sm"
              >
                Pagos de almuerzo
              </Button>
            </Link>
            <Button
              variant={isScrolled ? "primary" : "secondary"}
              size="sm"
              onClick={() => handleNavClick("#contacto")}
            >
              Agenda una reunión
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden p-2 rounded-lg transition-colors",
              isScrolled
                ? "text-neutral-700 hover:bg-neutral-100"
                : "text-white hover:bg-white/10"
            )}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden py-4 bg-white rounded-b-2xl shadow-xl"
            role="menu"
            aria-label="Menú móvil"
          >
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left px-4 py-2 text-neutral-700 hover:bg-primary-50 hover:text-primary-600 transition-colors rounded-lg"
                  role="menuitem"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 pt-2 space-y-2">
                <Link href="/pagos-almuerzo">
                  <Button
                    variant="outline"
                    size="md"
                    className="w-full"
                    role="menuitem"
                  >
                    Pagos de almuerzo
                  </Button>
                </Link>
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={() => handleNavClick("#contacto")}
                  role="menuitem"
                >
                  Agenda una reunión
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

