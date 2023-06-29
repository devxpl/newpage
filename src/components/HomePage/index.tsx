const HomePage = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="relative">
        <a
          href="https://api.whatsapp.com/send/?phone=5519982348981&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center"
        >
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            WhatsApp
          </button>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
