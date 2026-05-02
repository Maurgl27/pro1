export const CharacterSkeleton = () => {
  return (
    <div className="flex flex-col bg-gray-800/50 rounded-2xl border border-gray-700/50 overflow-hidden backdrop-blur-sm animate-pulse h-[350px] ">
      {/*imagen skeleton */}
      <div className="h-48 w-full bg-gray-700/50"></div>
      {/*contenido skeleton */}
      <div className="p-5 flex flex-col gap-3">
        {/*titulo */}
        <div className="h-6 bg-gray-700/50 rounded-md w-3/4"></div>
        {/*estado y especie */}
        <div className="h-4 bg-gray-700/50 rounded-md 2-1/2"></div>
        {/*ubicacion opcional pa rellenar */}
        <div className="h-4 bg-gray-700/50 rounded-md w-2/3 mt-2"></div>
      </div>
    </div>
  );
};
