import MainLayout from "../layouts/MainLayout";
import ServiceCard from "../components/main/ServiceCard";

export default function ServicesPage() {
  const services = [
    {
      title: "Desarrollo Web",
      description: "Creamos aplicaciones modernas, rápidas y seguras.",
      icon: "💻",
    },
    {
      title: "Diseño UI/UX",
      description: "Experiencias visuales increíbles y accesibles.",
      icon: "🎨",
    },
    {
      title: "Marketing Digital",
      description: "Aumenta tu presencia online con estrategias efectivas.",
      icon: "📈",
    },
  ];

  return (
    <MainLayout>
      <section className="px-20 py-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-10 text-center">
          Nuestros Servicios
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <ServiceCard
              key={i}
              title={s.title}
              description={s.description}
              icon={s.icon}
            />
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
