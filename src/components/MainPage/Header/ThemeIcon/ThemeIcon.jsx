import { useState } from 'react';
import { ReactComponent as MoonSvg } from '../../../../images/icons/icon-moon.svg';
import { ReactComponent as SunSvg } from '../../../../images/icons/icon-sun.svg';

const ThemeIcon = ({className }) => {
  const [theme, setTheme] = useState('lightTheme');

  const handleToggleTheme = () => {
    setTheme(theme === 'lightTheme' ? 'darkTheme' : 'lightTheme');
  };

  return (
    <div onClick={handleToggleTheme} className={className}>
      {theme === 'lightTheme' ? <MoonSvg /> : <SunSvg />}
    </div>
  );
};

export default ThemeIcon;
