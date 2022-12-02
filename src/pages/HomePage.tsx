import { useEffect, useState } from 'react';
import { useDebounce } from '../hooks/debounce';
import { useLazyGetUserReposQuery, useSearchUsersQuery } from '../store/github/github.api';

const HomePage = () => {
  const [search, setSearch] = useState('');
  const [dropdown, setDropdown] = useState(false);
  const debounced = useDebounce(search);
  const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  });
  const [fetchRepos, { isLoading: isReposLoading, isError: isReposError, data: reposData }] =
    useLazyGetUserReposQuery();

  const clickHandler = (user: string) => {
    fetchRepos(user);
    setDropdown(false);
  };
  useEffect(() => {
    setDropdown(debounced.length > 3 && data?.length! > 0);
  }, [debounced, data]);
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
        {dropdown && (
          <ul className="overflow-y-scroll list-none absolute top-[42px] left-0 right-0 max-h-[200px] shadow-md bg-white">
            {isLoading && <p className="text-center">Loading...</p>}
            {data?.map((item) => {
              return (
                <li
                  key={item.id}
                  className="cursor-pointer py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors"
                  onClick={() => clickHandler(item.login)}>
                  {item.login}
                </li>
              );
            })}
          </ul>
        )}
        <div className="container">
          {isReposLoading && <p className="text-center">Repos loading...</p>}
          {reposData?.map((repo) => (
            <p key={repo.id}>{repo.url}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
