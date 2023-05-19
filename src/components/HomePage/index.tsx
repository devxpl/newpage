import React from 'react';
const HomePage = () => {
  return (
    <>
      <main className="h-screen">
        <div className="flex justify-center items-center">
          <video
            className="pt-48 xxsm:pt-24"
            src="/assets/DIVULGA.mp4"
            controls
            width={400}
            height={300}
            autoPlay
          />
        </div>
        <div className="flex justify-center pt-5 pb-5 items-center">
          <div className="bg-green-500 rounded-full py-2 px-4">
            <a
              href="https://api.whatsapp.com/send/?phone=5519982348981&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-white font-bold">WHATS APP</p>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
