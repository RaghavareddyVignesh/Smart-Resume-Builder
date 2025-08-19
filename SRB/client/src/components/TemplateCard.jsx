export default function TemplateCard({ title, description, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer p-4 rounded-xl shadow-md bg-gradient-to-tr from-gray-50 to-gray-100 hover:scale-105 transition-all border"
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}