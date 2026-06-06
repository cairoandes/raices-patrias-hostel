import { AnimatedSection } from "@/components/animated-section";
import { AdminAnalytics } from "@/components/admin-analytics";
import { SectionHeading } from "@/components/section-heading";

export const metadata = {
  title: "Admin | Raíces Patrias Hostel"
};

export default function AdminPage() {
  return (
    <main className="px-5 pt-32 md:px-8">
      <AnimatedSection className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Panel de Administración"
          title="Dashboard para gestionar el hostel."
          copy="Reservas, ingresos, ocupación, demanda de habitaciones y próximas llegadas en una interfaz simple y funcional."
        />
      </AnimatedSection>
      <AnimatedSection className="mx-auto max-w-7xl py-14">
        <AdminAnalytics />
      </AnimatedSection>
    </main>
  );
}
