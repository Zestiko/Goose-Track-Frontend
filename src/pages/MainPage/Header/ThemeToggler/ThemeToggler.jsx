import { ReactComponent as MoonSvg } from '../../../../images/icons/icon-moon.svg';
import { ReactComponent as SunSvg } from '../../../../images/icons/icon-sun.svg';

const ThemeToggler = ({ className, handleToggleThemeClick, theme }) => (
  <div onClick={handleToggleThemeClick} className={className}>
    {theme === 'lightTheme' ? <MoonSvg /> : <SunSvg />}
  </div>
);
export default ThemeToggler;
