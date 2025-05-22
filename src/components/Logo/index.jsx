import { useNavigate } from 'react-router-dom';
import LogoIcon from '../../assets/images/uk-online-food-app-logo.webp';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
      <img src={LogoIcon} alt="UK Online Food Logo" width={'70px'} />
      <span className='font-bold text-blue-600 ml-2'>
        UK <span className="text-2xl">Cuisine</span>
      </span>
      
    </div>
  );
};

export default Logo;