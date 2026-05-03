import { useState, useRef, useCallback } from "react";
// Ajusta estas rutas según tu estructura exacta
import { useCharacters } from "../app/hooks/useCharacters";
import { CharacterCard } from "../components/ui/CharacterCard";
import { CharacterSkeleton } from "../components/ui/CharacterSkeleton";

export const RickAndMortyExplorer = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, characters, hasMore } = useCharacters(pageNumber);

  // Aquí configuramos el IntersectionObserver
  const observer = useRef<IntersectionObserver | null>(null);

  const lastCharacterElementRef = useCallback(
    (node: Element | null) => {
      // Si está cargando, no hacemos nada para evitar peticiones múltiples
      if (loading) return;

      // Desconectamos el observador anterior si existe
      if (observer.current) observer.current.disconnect();

      // Creamos un nuevo observador
      observer.current = new IntersectionObserver((entries) => {
        // Si el último elemento es visible en la pantalla y hay más páginas en la API
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });

      // Le decimos al observador que vigile el nodo actual (el último personaje)
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Título con gradiente tech */}
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-10 text-center">
          Multi-API Nexus
        </h1>

        {/* Grid adaptable: 1 columna en móvil, hasta 4 en monitores grandes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {characters.map((character, index) => {
            // Si es el último elemento del array, le pasamos la referencia del observador
            if (characters.length === index + 1) {
              return (
                <div ref={lastCharacterElementRef} key={character.id}>
                  <CharacterCard character={character} />
                </div>
              );
            } else {
              // Si no es el último, lo renderizamos normal
              return <CharacterCard key={character.id} character={character} />;
            }
          })}

          {/* Si está cargando, mostramos 4 Skeletons para rellenar la fila inferior */}
          {loading && (
            <>
              <CharacterSkeleton />
              <CharacterSkeleton />
              <CharacterSkeleton />
              <CharacterSkeleton />
            </>
          )}
        </div>

        {/* Manejo de errores */}
        {error && (
          <div className="text-red-400 text-center mt-8 font-medium">
            Ocurrió un error al cargar el multiverso...
          </div>
        )}

        {/* Mensaje final cuando ya no hay más páginas en la API */}
        {!hasMore && !loading && (
          <p className="text-slate-500 text-center mt-12 font-medium">
            Has llegado al final de los registros.
          </p>
        )}
      </div>
    </div>
  );
};
