import { useState } from 'react';
import { useSearchUsersQuery } from '../store/github/github.api';

const HomePage = () => {
  const [search, setSearch] = useState('');
  const { isLoading, isError, data } = useSearchUsersQuery('stepGT');
  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      {isError && <p className="text-center text-red-600">Error!</p>}
      <div className="relative w-[560px]">
        <input
          type="text"
          className="border py-2 px-4 w-full h-[42px] mb-2"
          placeholder="Enter github user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas totam nulla dolore
          repellendus exercitationem doloribus iste eos minima at asperiores expedita, suscipit
          animi? Magni consequatur dolore ipsa maiores quidem nemo.
        </div>
      </div>
    </div>
  );
};

export default HomePage;
