import { useSearchUsersQuery } from '../store/github/github.api';

const HomePage = () => {
  const { isLoading, isError, data } = useSearchUsersQuery('stepGT');
  return <div>HomePage</div>;
};

export default HomePage;
