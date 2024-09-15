export const ResumeSection = () => {
  return (
    <section className="bg-[#0A1527] py-36" id="resume">
      <div className="container mx-auto px-6">
        <div className="mb-16 flex items-center justify-center before:my-auto before:h-px before:w-[250px] before:bg-gradient-to-l before:from-main-500 before:to-[#333] before:content-[''] after:my-auto after:h-px after:w-[250px] after:bg-gradient-to-l after:from-[#333] after:to-main-500 after:content-['']">
          <h2 className="mx-5 whitespace-nowrap text-xl font-bold text-main-500">
            Mi Curriculum
          </h2>
        </div>
        <div className="grid grid-cols-6 gap-6 xl:gap-20">
          <div className="col-span-6 sm:col-span-3">
            <h3 className="mb-5 text-[20px] font-bold text-white">Educación</h3>
            <div className="group border-l-2 border-l-main-500 bg-[#0d1a31] p-10">
              <h4 className="relative mb-1 text-[16px] font-bold text-main-500 before:absolute before:-left-[51px] before:top-1 before:h-5 before:w-5 before:rounded-full before:border-2 before:border-main-500 before:bg-[#0d1a31] before:transition-colors before:duration-300 before:content-[''] before:group-hover:bg-main-500">
                Diseño Estático de Front-End
              </h4>
              <h5 className="mb-3 text-sm font-bold text-white">
                Universidad Nacional del Nordeste / 2023
              </h5>
              <p>
                Curso intensivo de Front-End, enfocado en el diseño estático y
                dinámico de aplicaciones web. Aprendí a estructurar páginas con
                HTML5 y estilizar con CSS3, integrando interactividad con
                JavaScript.
              </p>
            </div>
          </div>
          <div className="col-span-6 sm:col-span-3">
            <h3 className="mb-5 flex text-[20px] font-bold text-white">
              Experiencia
            </h3>
            <div className="group border-b border-l-2 border-b-slate-700 border-l-main-500 bg-[#0d1a31] p-10">
              <h4 className="relative mb-1 text-[16px] font-bold text-main-500 before:absolute before:-left-[51px] before:top-1 before:h-5 before:w-5 before:rounded-full before:border-2 before:border-main-500 before:bg-[#0d1a31] before:transition-colors before:duration-300 before:content-[''] before:group-hover:bg-main-500">
                Desarrolladora Web Front-End
              </h4>
              <h5 className="mb-3 text-sm font-bold text-white">
                Freelance / Actual
              </h5>
              <p>
                Diseñé y desarrollé plantillas para eCommerce y landing pages
                usando HTML, CSS, JavaScript, Tailwind CSS y React. Estas
                plantillas fueron creadas para ser subidas a Template Monster.
              </p>
            </div>
            <div className="group border-b border-l-2 border-b-slate-700 border-l-main-500 bg-[#0d1a31] p-10">
              <h4 className="relative mb-1 text-[16px] font-bold text-main-500 before:absolute before:-left-[51px] before:top-1 before:h-5 before:w-5 before:rounded-full before:border-2 before:border-main-500 before:bg-[#0d1a31] before:transition-colors before:duration-300 before:content-[''] before:group-hover:bg-main-500">
                Desarrolladora Web Front-End
              </h4>
              <h5 className="mb-3 text-sm font-bold text-white">
                Proyectos Personales / Actual
              </h5>
              <p>
                Desarrollé proyectos personales con React para expandir mis
                conocimientos, integrando diversas APIs para crear aplicaciones
                interactivas y funcionales.
              </p>
            </div>
            <div className="group border-l-2 border-l-main-500 bg-[#0d1a31] p-10">
              <h4 className="relative mb-1 text-[16px] font-bold text-main-500 before:absolute before:-left-[51px] before:top-1 before:h-5 before:w-5 before:rounded-full before:border-2 before:border-main-500 before:bg-[#0d1a31] before:transition-colors before:duration-300 before:content-[''] before:group-hover:bg-main-500">
                Desarrolladora Web Front-End
              </h4>
              <h5 className="mb-3 text-sm font-bold text-white">
                Trabajo realizado para un hotel en Chile / 2022
              </h5>
              <p>
                Creé el sitio web informativo para UMA Hotel, transformando un
                diseño en HTML, TailwindCSS y JavaScript. Colaboré con un
                desarrollador backend en PHP y Laravel 9 para integrar el diseño
                y un formulario de reserva con redirección a WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
