import React from 'react';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-cyan-700">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 font-mono">
        Serviços de Limpeza Profissional
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Especialistas em Limpeza de Estofados e Limpeza Pós-Obra
      </p>
      <button className=" mr-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4">
        Saiba Mais
      </button>
      <div className="grid grid-cols-3 xsm:grid-cols-1 md:grid-cols-3 gap-4 xxsm:grid-cols-1 desktop:grid-cols-3">
        <Image
          src="/assets/1.png"
          alt="Serviços de Limpeza"
          className="w-64 h-auto xsm:w-40 xxsm:w-36 desktop:w-72"
          width={300}
          height={300}
        />
        <Image
          src="/assets/100.jpg"
          alt="Serviços de Limpeza"
          className="w-64 h-auto xsm:w-46 xxsm:w-44 desktop:w-80 laptop:w-44  pr-5"
          width={300}
          height={300}
        />
        <Image
          src="/assets/2.jpg"
          alt="Serviços de Limpeza"
          className="w-64 h-auto  xsm:w-40 xxsm:w-36 desktop:w-72"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default HomePage;
