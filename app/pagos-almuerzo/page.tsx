import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PaymentInfoPage from "@/components/sections/PaymentInfoPage";

export const metadata: Metadata = {
  title: "Pagos de Almuerzo | Scool Chef",
  description:
    "Descubre cómo pagar los almuerzos escolares de forma fácil y segura con Tap In. Guía completa de pagos digitales para apoderados.",
  keywords: [
    "pagos almuerzo",
    "Tap In",
    "pagos escolares",
    "billetera digital",
    "alimentación escolar",
  ],
};

export default function PagosAlmuerzo() {
  return (
    <main className="min-h-screen">
      <Header />
      <PaymentInfoPage />
      <Footer />
    </main>
  );
}
