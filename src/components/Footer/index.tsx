export const Footer = () => {
  return (
    <footer className="py-5 desktop:mt-0 4k:mt-0 desktop:block flex justify-center">
      <div className="flex justify-center">
        <ul className="text-gray-700">
          <li className="inline-block pl-2">
            <a href="https://www.facebook.com/profile.php?id=100074426386381">
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </li>
          <li className="inline-block pl-2">
            <a href="https://api.whatsapp.com/send/?phone=5519982348981&text&type=phone_number&app_absent=0">
              <i className="fab fa-twitter "></i> WhatsApp
            </a>
          </li>
          <li className="inline-block pl-2">
            <a href="https://www.instagram.com/mais_limpo.higienizacoes/">
              <i className="fab fa-instagram "></i> Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
