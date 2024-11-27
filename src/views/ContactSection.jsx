import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaMapLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { Loading } from "../components";
import { toast } from "react-toastify";
import { FaCheckCircle } from "react-icons/fa";

import "../assets/styles/toast.css";

export const ContactSection = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const toastConfig = {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const userName = formData.get("name");
    const userEmail = formData.get("email");
    const message = formData.get("message");

    if (!userName || !userEmail || !message) {
      alert("Campos vacíos");
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        "service_njbmf1k",
        "template_lqs2rs5",
        form.current,
        "oEwg6h16GWQDjT-5A",
      )
      .then(
        () => {
          toast.success("Mensaje enviado!", {
            ...toastConfig,
            icon: <FaCheckCircle className="h-6 w-6 text-main-500" />,
          });
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
        },
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="bg-[#0A1527] py-36" id="contact">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex items-center justify-center before:my-auto before:h-px before:w-[250px] before:bg-gradient-to-l before:from-main-500 before:to-[#333] before:content-[''] after:my-auto after:h-px after:w-[250px] after:bg-gradient-to-l after:from-[#333] after:to-main-500 after:content-['']">
          <h2 className="mx-5 whitespace-nowrap text-xl font-bold text-main-500">
            Contacto
          </h2>
        </div>
        <div className="grid grid-cols-6 gap-6 xl:gap-20">
          <div className="col-span-6 sm:col-span-3">
            <h3 className="mb-5 text-[20px] font-bold text-white">
              Pongámonos en contacto
            </h3>
            <ul>
              <li className="mb-4 flex items-center gap-3 text-white">
                <div className="flex items-center justify-center rounded-full bg-[#122039] p-3 text-main-500">
                  <FaMapLocationDot className="h-6 w-6" />
                </div>
                <p>Buenos Aires, Argentina</p>
              </li>
              <li className="mb-4 flex items-center gap-3 text-white">
                <div className="flex items-center justify-center rounded-full bg-[#122039] p-3 text-main-500">
                  <FaPhone className="h-6 w-6" />
                </div>
                <a href="tel:+542284673568">+54 2284 673568</a>
              </li>
              <li className="mb-4 flex items-center gap-3 text-white">
                <div className="flex items-center justify-center rounded-full bg-[#122039] p-3 text-main-500">
                  <FaEnvelope className="h-6 w-6" />
                </div>
                <a href="mailto:andrade.dev@outlook.com">
                  andrade.dev@outlook.com
                </a>
              </li>
              <div className="mt-8 flex items-center gap-2">
                <a
                  href="#"
                  className="flex items-center justify-center rounded-full bg-[#122039] p-[10px] text-white transition-colors duration-300 hover:bg-[#181717]"
                >
                  <IoLogoGithub className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center rounded-full bg-[#122039] p-[10px] text-white transition-colors duration-300 hover:bg-[#0A66C2]"
                >
                  <IoLogoLinkedin className="h-5 w-5" />
                </a>
              </div>
            </ul>
          </div>
          <div className="col-span-6 sm:col-span-3">
            <form ref={form} onSubmit={sendEmail}>
              <div className="relative w-full">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="peer block w-full appearance-none rounded-lg border-0 bg-[#0d1a31] px-2.5 pb-2.5 pt-5 text-sm text-white shadow focus:outline-none focus:ring-0"
                  placeholder=" "
                  required
                  autoComplete="off"
                />
                <label
                  htmlFor="name"
                  className="z-1 pointer-events-none absolute left-2.5 top-4 origin-[0] -translate-y-4 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-main-500"
                >
                  Nombre
                </label>
              </div>
              <div className="relative mt-4 w-full">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="peer block w-full appearance-none rounded-lg border-0 bg-[#0d1a31] px-2.5 pb-2.5 pt-5 text-sm text-white shadow focus:outline-none focus:ring-0"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="email"
                  className="z-1 pointer-events-none absolute left-2.5 top-4 origin-[0] -translate-y-4 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-main-500"
                >
                  Email
                </label>
              </div>
              <div className="relative mt-4 w-full overflow-hidden rounded-lg bg-[#0d1a31] pr-4 shadow">
                <textarea
                  id="message"
                  name="message"
                  className="peer block max-h-[200px] min-h-[130px] w-full resize-none appearance-none border-0 bg-transparent px-2.5 pb-2.5 pt-5 text-sm text-white focus:outline-none focus:ring-0"
                  placeholder=" "
                  required
                ></textarea>

                <label
                  htmlFor="message"
                  className="z-1 pointer-events-none absolute left-2.5 top-4 origin-[0] -translate-y-4 scale-75 transform text-sm text-white duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-main-500"
                >
                  Mensaje
                </label>
              </div>
              <button
                className="mt-5 inline-flex items-center gap-3 rounded-full border border-main-500 bg-main-500/30 px-7 py-3 font-bold text-white"
                type="submit"
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <Loading /> Enviando
                  </>
                ) : (
                  "Enviar"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
