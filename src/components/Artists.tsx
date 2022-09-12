type DataArtists = {
  artist: string;
  fotografias: number;
  name: string;
};

export function Artists({ artist, fotografias, name }: DataArtists) {
  return (
    <div className="pt-4">
        <div className="bg-[#252525] border border-zinc-700 rounded h-[90px] w-[210px]">
            <div className="flex justify-between p-4">
                <img alt="Primerio artista." className="h-14 w-14" src={artist} />

                <div className="pt-3">
                    <p className="text-zinc-200 text-sm">{name}</p>

                    <span className="text-red-500 text-sm">
                        {fotografias} Fotografias.
                    </span>
                </div>
            </div>
        </div>
    </div>
  );
};