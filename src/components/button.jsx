export default function Button({ text, variant = "primary", onClick }) {
  const variants = {
    primary: "bg-blue-500 text-black hover:bg-blue-600",
    secondary: "bg-gray-300 text-black hover:bg-gray-400",
    danger: "bg-red-500 text-black hover:bg-red-600",
  };

  const variantClass = variants[variant] || variants.primary;

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-semibold transition ${variantClass}`}
    >
      {text}
    </button>
  );
}
