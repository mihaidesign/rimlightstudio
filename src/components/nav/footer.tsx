
import { useEffect, } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Logo from "components/shared/logo/logo";
import { Text } from 'components/shared/text';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "components/shared/tooltip";
import IconLink from "components/shared/icon-link/icon-link";
import { Placement } from "react-aria";
import { navigationRoutes } from "./layout";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";


const FACEBOOK_URL = 'https://facebook.com/';
const INSTAGRAM_URL = 'https://instagram.com/';
const EMAIL_ADDRESS = 'testo@example.com';
const WHATSAPP_NUMBER = 'https://whatsapp.com/';

const links = [
  {
    tooltip: "Facebook",
    url: FACEBOOK_URL,
    icon: faFacebookF,
    placement: 'bottom start'
  },
  {
    tooltip: "Instagram",
    url: INSTAGRAM_URL,
    icon: faInstagram
  },
  {
    tooltip: "WhatsApp",
    url: WHATSAPP_NUMBER,
    icon: faWhatsapp
  },
  {
    tooltip: "Email",
    url: EMAIL_ADDRESS,
    icon: faEnvelope
  }
];

const Footer = () => {
  const { t } = useTranslation();


  useEffect(() => {
    gsap.set('.footer-container', { yPercent: -50 });

    const uncover = gsap.timeline({ paused: true });
    uncover.to('section.footer-container', { yPercent: 3.5902, ease: 'none' });

    ScrollTrigger.create({
      trigger: '.main-container',
      start: 'bottom bottom',
      end: '+=75%',
      animation: uncover,
      scrub: true,
    });
    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <>
      <footer className="pt-32 border-t border-t-golden-text overflow-hidden w-screen h-footer 
      bg-gradient-to-b dark:from-emerald-green from-grey-light dark:to-grey-dark to-ivory-light to-35%
      flex flex-col justify-center">
        <section className="footer-container w-full h-footer items-center flex flex-col dark:bg-dark bg-grey-light border-t border-golden-text">
          <div className="container flex items-center justify-between flex-wrap w-full h-full">

            <div className="flex w-full justify-center">
              <div className="flex relative lg:w-[96px] w-3/12 sm:w-2/12 justify-center pt-16">
                <Logo />
              </div>
            </div>

            <div className="flex w-full">
              <div className="flex flex-col w-2/3 space-y-4">
                <Text variant='heading-3' className="w-full">
                  RIM Light Studio
                </Text>
                <div className="flex space-x-2">
                  {
                    links.map(({ tooltip, url, icon, placement }, index) => (
                      <Tooltip key={index} tooltip={tooltip} placement={placement as Placement ?? 'bottom'}>
                        <IconLink to={url} target="_blank" className="border border-golden-text">
                          <FontAwesomeIcon icon={icon} className="w-5 h-5" />
                        </IconLink>
                      </Tooltip>
                    ))
                  }
                </div>
                <div className="flex grow items-end">
                  <ul className="hidden md:flex space-x-4">
                    {navigationRoutes.map((route, index) => (
                      <li key={index} className="group">
                        <NavLink
                          to={route.path}
                          className={({ isActive }) =>
                            `${isActive
                              ? 'text-golden-text dark:text-golden-text before:scale-50'
                              : 'before:scale-0 dark:text-white text-golden-text'} 
                      font-display-bold
                      before:h-1 before:absolute before:-top-3 before:-left-0.5 before:flex before:w-full dark:before:bg-golden-text before:bg-golden-text
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
              </div>
              <div className="flex flex-col space-y-4 w-1/3">
                <div className="flex flex-col">
                  <Text variant="heading-6" className="text-golden-text dark:text-golden-text">Orar</Text>
                  <Text variant="body">L-D 17:00-22:00</Text>
                </div>
                <div className="flex flex-col">
                  <Text variant="heading-6" className="text-golden-text dark:text-golden-text">Adresa</Text>
                  <Text variant="body">Str. Trifoiului nr. 16</Text>
                </div>
                <div className="flex flex-col">
                  <Text variant="heading-6" className="text-golden-text dark:text-golden-text">Telefon</Text>
                  <Text variant="body">+40 777 777 777</Text>
                </div>
                <div className="flex">
                  <Text variant="body">Privacy policy</Text>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
      <section className="flex w-full">
        <div className="flex w-full pt-5 pb-1 justify-center">
          <Text variant='body' className="flex">
            © Copyright RIM Light Studio {new Date().getFullYear()} All rights reserved.
          </Text>
        </div>
      </section>
    </>
  );
};
export default Footer;