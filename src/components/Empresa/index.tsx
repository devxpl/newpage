const SobreEmpresa = () => {
  return (
    <>
      <main className="h-screen">
        <div className="flex justify-center items-center">
          <video
            className="xxsm:w-52 pt-5 xxsm:h-auto xxsm:pb-10 desktop:w-80"
            src="/assets/77.mp4"
            controls
            width={300}
            height={300}
            autoPlay
          />
        </div>
        <div className="flex justify-center pb-5 items-center">
          <div className="bg-gradient-to-br from-cyan-700 rounded-full py-2 px-4">
            <div className=" rounded-full py-2 px-4">
              <a
                href="https://www.google.com.br/search?q=mais+limpo+%7C+limpeza+%7C+higienização+%7C+impermeabilização&sxsrf=APwXEdevUvOXL2KFug6Oe_oO1JJfnW774w%3A1684446785591&source=hp&ei=QZ5mZNXMIZyd5OUPgoaX2AE&iflsig=AOEireoAAAAAZGasUX6E9onasYVJ-dFxidFS3vqmDV0u&oq=&gs_lcp=Cgdnd3Mtd2l6EAEYADIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJ1AAWABgnQNoAXAAeACAAQCIAQCSAQCYAQCwAQo&sclient=gws-wiz#lrd=0x3f338b8e9d933ad:0xc8d76f5da620a0ab,1,,,,"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-white font-bold flex justify-center items-center">
                  Clique aqui
                </p>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default SobreEmpresa;
