import PropTypes from "prop-types";
import { BsEye, BsGithub } from "react-icons/bs";

export const ProyectCard = ({
  image,
  name,
  description,
  urlDemo,
  urlRepo,
  category,
}) => {
  return (
    <div
      className={`mix-all mix mix-${category} group col-span-12 flex h-[420px] flex-col overflow-hidden rounded-xl bg-[#101d37] min-[500px]:col-span-6 min-[800px]:col-span-4 xl:col-span-3`}
    >
      <figure className="h-[200px] overflow-hidden">
        <img
          className="h-full object-cover transition-transform duration-300 group-hover:scale-105"
          src={image}
          alt={name}
        />
      </figure>
      <div>
        <h3 className="my-2 px-4 text-[20px] font-bold text-white">{name}</h3>
        <div className="line-clamp-5 px-4 text-sm">{description}</div>
      </div>
      <div className="mt-auto flex justify-center gap-5 p-4 sm:gap-10">
        <a
          href={urlDemo}
          target="_blank"
          className="flex items-center gap-1 rounded-full border border-main-500 bg-main-500/30 px-4 py-1 text-white"
        >
          <BsEye />
          Ver
        </a>
        {
          <a
            href={urlRepo}
            target="_blank"
            className={`${!urlRepo ? "pointer-events-none select-none border-none bg-slate-500 text-slate-600" : "border border-main-500 bg-main-500/30 text-white"} flex items-center gap-1 rounded-full px-4 py-1`}
          >
            <BsGithub />
            Repo
          </a>
        }
      </div>
    </div>
  );
};

ProyectCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  urlDemo: PropTypes.string.isRequired,
  urlRepo: PropTypes.string,
  category: PropTypes.string.isRequired,
};
