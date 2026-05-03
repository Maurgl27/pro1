import { motion } from "framer-motion";
interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
}

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  // Colores dinámicos para el estado del personaje
  const statusColor =
    character.status === "Alive"
      ? "bg-green-500"
      : character.status === "Dead"
      ? "bg-red-500"
      : "bg-gray-500";

  return (
    <motion.div
      // Animación de entrada: entra desde abajo y se desvanece
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      // Tailwind Glassmorphism (Fondo semitransparente, blur y borde sutil)
      className="group relative flex flex-col bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl overflow-hidden hover:border-slate-500 transition-colors duration-300 shadow-xl"
    >
      {/* Contenedor de la Imagen con efecto hover */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Info del personaje */}
      <div className="p-5 flex flex-col">
        <h3 className="text-xl font-bold text-white mb-1 truncate">
          {character.name}
        </h3>

        {/* Indicador de Estado */}
        <div className="flex items-center gap-2 text-sm text-slate-300 mb-3">
          <span className={`w-2.5 h-2.5 rounded-full ${statusColor}`}></span>
          <span>
            {character.status} - {character.species}
          </span>
        </div>
      </div>
    </motion.div>
  );
};
