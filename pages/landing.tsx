import AppLayout from '../components/AppLayout';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import useEvent from '../hooks/useEvents';

const Landing = () => {
  const { data, error } = useEvent();

  if (error)
    return (
      <ErrorMessage error={'Something unexpected happened. Please try again'} />
    );

  if (!data) return <Loading />;

  return <AppLayout />;
};

export default Landing;
