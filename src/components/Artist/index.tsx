import { IArtist } from "../../interfaces/artist";

export function Artist({ artist, photographs, name }: IArtist) {
  return (
    <div className='pt-4'>
      <div className='bg-[#252525] border border-zinc-700 rounded h-full w-full'>
        <div className='flex justify-around p-4'>
          <img alt={name} className='h-14 w-14' src={artist} />

          <div className='p-2'>
            <p className='text-zinc-200 text-sm'>{name}</p>

            <span className='text-red-500 text-sm'>{photographs} Fotografias.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
