import { useTheme } from 'hooks/useTheme';
import { ReactComponent as MoonSvg } from '../../../../images/icons/icon-moon.svg';
import { ReactComponent as SunSvg } from '../../../../images/icons/icon-sun.svg';
import scss from './ThemeToggler.module.scss';

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div onClick={handleThemeClick} className={scss.themeIcon}>
      {theme === 'dark' ? <MoonSvg /> : <SunSvg />}
    </div>
  );
};
export default ThemeToggler;
