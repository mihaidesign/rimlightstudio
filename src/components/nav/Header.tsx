import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import LogoDark from 'images/Logo_dark.png';
import LogoLight from 'images/Logo_light.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBook, faContactBook, faHouse, faLightbulb, faX } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb as faLightbulbOutline } from '@fortawesome/free-regular-svg-icons';
import { Translation } from "util/translationKeys";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "components/LanguageSwitcher";
import { IconButton } from "components/shared/icon-button";


const routes = [
  {
    title: Translation.Menu.home,
    path: "/",
    icon: <FontAwesomeIcon icon={faHouse} className="text-emerald-green" />,
  },
  {
    title: Translation.Menu.about,
    path: "/about",
    icon: <FontAwesomeIcon icon={faBook} className="text-emerald-green" />,
  },
  {
    title: Translation.Menu.portfolio,
    path: "/contact",
    icon: <FontAwesomeIcon icon={faContactBook} className="text-emerald-green" />,
  },
];

const Header = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(false);
  const { t } = useTranslation();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Function to toggle the light or dark theme
  const toggleTheme = () => {
    localStorage.setItem('theme', isLightTheme ? 'dark' : 'light');
    setGlobalTheme(isLightTheme ? 'dark' : 'light');
    setIsLightTheme(!isLightTheme);
  };

  // Function to set the global theme
  const setGlobalTheme = (theme: string) => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  // Effect to get the stored theme (if any)
  useEffect(() => {
    // if key is not stored in localstorage then set it to dark
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setGlobalTheme(storedTheme);
      setIsLightTheme(storedTheme === 'light');
    } else {
      setGlobalTheme('dark');
      localStorage.setItem('theme', 'dark');
      setIsLightTheme(false);
    }
  }, []);

  return (
    <>
      <nav className="border-gold bg-grey-light dark:bg-dark dark:border-golden border-b w-full flex flex-col items-center">
        <div className="flex items-center justify-between py-3 px-2 md:px-0 md:py-6 container relative flex-wrap">
          <div className="flex xs:max-w-2/5 grow">
            <ul className="hidden md:flex space-x-4">
              {routes.map((route, index) => (
                <li key={index} className="group">
                  <NavLink
                    to={route.path}
                    className={({ isActive }) =>
                      `${isActive
                        ? 'text-golden-text dark:text-golden-text before:scale-50'
                        : 'before:scale-0 dark:text-white text-golden-text'} 
                      font-display-bold
                      before:h-1 before:absolute before:-bottom-3 before:-left-0.5 before:flex before:w-full dark:before:bg-golden-text before:bg-golden-text
                      before:transition-transform before:duration-300 before:ease-in-out
                      group-hover:before:scale-x-75 group-hover:before:bg-gold/70 dark:group-hover:before:bg-golden-text
                      font-bold text-xs lg:tracking-heading tracking-nav hover:text-gold/70 dark:hover:text-golden-text 
                      ease-in duration-200 transition-all uppercase relative w-full
                    `}
                  >
                    <span>
                      {t(route.title)}
                    </span>

                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex relative w-1/5 xs:w-[96px] justify-center">
            <div className={`absolute border flex items-center justify-center dark:border-golden border-gold top-0 left-1/2
            -translate-y-1/3 -translate-x-1/2 rounded-full bg-gradient-to-b dark:from-emerald-green from-grey-light dark:to-grey-dark to-ivory-light
            w-20 md:w-24 h-20 md:h-24 dark:shadow-neumorphic shadow-neumorphic-inverse`
            }>
              <Link to="/" className="flex items-center focus:outline-transparent focus-visible:outline-none">
                <img src={LogoLight} className="h-8 dark:flex hidden" alt="Rim Light Studio Logo Light" />
                <img src={LogoDark} className="h-8 dark:hidden" alt="Rim Light Studio Logo Dark" />
              </Link>
            </div>
          </div>

          <div className="flex w-2/5 justify-end space-x-2">


            <IconButton onClick={toggleTheme}>
              <span className="sr-only">Toggle dark mode  </span>
              <FontAwesomeIcon icon={faLightbulb} className="dark:hidden flex text-golden-text" />
              <FontAwesomeIcon icon={faLightbulbOutline} className="dark:flex hidden" />
            </IconButton>

            <div className="md:flex hidden">
              <LanguageSwitcher />
            </div>

            <IconButton onClick={toggleNav} className="md:hidden">
              <span className="sr-only">Open main menu</span>
              {!isNavOpen ?
                <FontAwesomeIcon icon={faBars} className="flex text-golden-text" />
                :
                <FontAwesomeIcon icon={faX} className="flex text-golden-text" />
              }

            </IconButton>
            {/* <button
              onClick={toggleNav}
              className="
                inline-flex items-center justify-center 
                md:hidden p-2 w-10 h-10 text-sm text-emerald-green dark:text-golden-text 
                rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-green dark:focus:ring-golden"
              aria-expanded={isNavOpen}>
            </button> */}


          </div>
          <div className={`${isNavOpen ? 'md:max-h-0 max-h-screen' : ''} flex flex-col w-full max-h-0 overflow-hidden transition-all duration-200 ease-in-out `}>
            <LanguageSwitcher />
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-nav-bg dark:border-gray-700">
              {routes.map((route, index) => (
                <li key={index} >
                  <NavLink
                    to={route.path}
                    className={({ isActive }) =>
                      `${isActive ? 'text-golden-text dark:text-golden-text before:scale-[30%]' : 'before:scale-0 dark:text-white text-dark'} 
                      before:h-full before:absolute before:-bottom-0 before:left-2 before:flex before:w-1 before:bg-golden-text
                      before:transition-transform before:duration-300 before:ease-in-out
                      font-bold focus:text-gold dark:focus:text-golden-text text-emerald-green 
                      ease-in duration-200 transition-all font-display uppercase text-sm relative w-full
                      `}
                  >
                    <span className={`flex px-4 py-3 font-display tracking-heading`}>
                      {t(route.title)}
                    </span>


                  </NavLink>
                  {/* <NavLink
                    to={route.path}
                    className={({ isActive }) =>
                      `${isActive
                        ? 'text-white dark:text-white dark:bg-emerald-green bg-emerald-green'
                        : 'dark:text-white text-dark'} 
                      font-bold  
                      ease-in duration-200 transition-all font-display uppercase text-sm relative w-full flex px-4 py-3
                      `}
                  >
                    {t(route.title)}
                  </NavLink> */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav >
      <Outlet />
    </>
  );
};

export default Header;