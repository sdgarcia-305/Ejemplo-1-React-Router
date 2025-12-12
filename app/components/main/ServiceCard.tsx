interface Props {
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({ title, description, icon }: Props) {
  return (
    <div className="bg-white shadow-lg p-8 rounded-xl hover:scale-105 transition">
      <div className="text-6xl mb-4 text-center">{icon}</div>
      <h3 className="text-2xl font-bold mb-3 text-gray-800 text-center">
        {title}
      </h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}
