import { useState, useEffect, useRef } from "react";

interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
}

export const useCharacters = (pageNumber: number) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [hasMore, setHasMore] = useState(false);

  // Usamos useRef para evitar actualizar estado si el componente ya no está montado
  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    // Cancelar petición anterior si el efecto se vuelve a ejecutar
    const abortController = new AbortController();

    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${pageNumber}`,
          { signal: abortController.signal }
        );

        if (!res.ok) {
          throw new Error(`HTTP error ${res.status}`);
        }

        const data = await res.json();

        if (!isMounted.current) return; // si se desmontó, no actualizamos

        setCharacters((prev) => {
          // Usamos Map para evitar duplicados basados en id
          const map = new Map(prev.map((c) => [c.id, c]));
          data.results.forEach((c: Character) => map.set(c.id, c));
          return Array.from(map.values());
        });
        setHasMore(data.info.next !== null);
        setLoading(false);
      } catch (err) {
        if (!isMounted.current) return;
        // Si fue abortado, no lo tratamos como error de red
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }
        setError(err instanceof Error ? err.message : "Error desconocido");
        setLoading(false);
      }
    };

    fetchCharacters();

    // Limpieza: aborta la petición si se desmonta o cambia la página
    return () => {
      abortController.abort();
    };
  }, [pageNumber]);

  return { loading, error, characters, hasMore };
};
