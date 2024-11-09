import { useNavigate } from 'react-router-dom';

const IndexPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate('/homepage')}>이동</button>
    </>
  );
};

export default IndexPage;
