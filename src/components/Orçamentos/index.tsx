const Form = () => {
  return (
    <form
      method="POST"
      action="https://afonsobachelli.activehosted.com/proc.php"
      id="_form_3_"
      className="flex justify-center mx-auto max-w-xl  mt-10 rounded-lg bg-zinc-200 shadow-lg shadow-zinc-500/50"
      noValidate
      data-styles-version="0"
    >
      <input type="hidden" name="u" value="3" />
      <input type="hidden" name="f" value="3" />
      <input type="hidden" name="s" />
      <input type="hidden" name="c" value="0" />
      <input type="hidden" name="m" value="0" />
      <input type="hidden" name="act" value="sub" />
      <input type="hidden" name="v" value="2" />
      <input type="hidden" name="or" value="492f893d215c851c6ed6ab07c6d064f8" />

      <div className="p-4">
        <div className="text-center text-2xl font-bold text-gray-800 mb-6 font-mono ">
          Preencher para orçamento
        </div>

        <div className="mb-6">
          <label htmlFor="fullname" className="block mb-1 font-mono ">
            Nome completo*
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Digite seu nome"
            required
            className="w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block mb-1 font-mono ">
            Email*
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Digite seu email"
            required
            className="w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-6 ">
          <label htmlFor="customer_account" className="block mb-1 font-mono ">
            Telefone*
          </label>
          <input
            type="text"
            id="customer_account"
            name="customer_account"
            placeholder="Digite seu número"
            required
            className="w-full rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
          />
        </div>

        <div className="mb-6 font-mono ">
          <input type="hidden" id="ca[1][t]" name="ca[1][t]" value="text" />
          <label htmlFor="ca[1][v]" className="block mb-1">
            Descrição
          </label>
          <input
            type="text"
            id="ca[1][v]"
            name="ca[1][v]"
            className="w-full h-20 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex justify-center font-mono ">
          <div className="mb-6">
            <button
              id="_form_3_submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>

      <div className="hidden"></div>
    </form>
  );
};
export default Form;
