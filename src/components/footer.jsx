
export default function Footer() {
  return (
    <footer className="p-4 bg-gray-900 text-white text-center dark:bg-gray-700">
      <p>© {new Date().getFullYear()} My React App</p>
      <a
        href="#"
        className="text-blue-400 hover:text-blue-300 ml-2 underline"
      >
        All rigts reserved
      </a>
    </footer>
  );
}
