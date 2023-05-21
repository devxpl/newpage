import React from 'react';
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 font-mono iphone11:hidden desktop:block">
        Serviços de Limpeza Profissional
      </h1>
      <h1 className="text-lg font-bold text-gray-800 mb-4 font-mono iphone11:block desktop:hidden iphone11:mt-20">
        Serviços de Limpeza Profissional
      </h1>
      <p className="text-1xl text-gray-800 mb-8 font-mono xsm:hidden desktop:block">
        Especialistas em Limpeza de Estofados e Limpeza Pós-Obra
      </p>
      <div className="grid grid-cols-3 xsm:grid-cols-1 md:grid-cols-3 gap-4 xxsm:grid-cols-1 desktop:grid-cols-3 mb-5">
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
      <button className="justify-center items-center flex mr-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-10 mt-0">
        Saiba Mais
      </button>
    </div>
  );
};

export default HomePage;
