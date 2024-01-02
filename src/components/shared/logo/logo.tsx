import { Link } from "react-router-dom";
import LogoDark from 'images/Logo_dark.png';
import LogoLight from 'images/Logo_light.png';

const Logo = () => {
  return (
    <div className={`absolute border flex items-center justify-center dark:border-golden border-gold top-0 left-1/2
            -translate-y-1/3 -translate-x-1/2 rounded-full bg-gradient-to-b dark:from-emerald-green from-grey-light dark:to-grey-dark to-ivory-light
            w-[80%] lg:w-24 lg:aspect-square h-auto aspect-square dark:shadow-neumorphic shadow-neumorphic-inverse`
    }>
      <Link to="/" className="flex items-center focus:outline-transparent focus-visible:outline-none">
        <img src={LogoLight} className="h-8 dark:flex hidden" alt="Rim Light Studio Logo Light" />
        <img src={LogoDark} className="h-8 dark:hidden" alt="Rim Light Studio Logo Dark" />
      </Link>
    </div>
  );
};
export default Logo;