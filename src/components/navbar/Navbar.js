import { useCallback, useMemo, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

//scss
import "./style.scss";

//Assets - svg
import { ReactComponent as AthleadLogo } from "assets/svg/athlead.svg"
import { ReactComponent as WorldIcon } from "assets/svg/world.svg"
import { ReactComponent as HamburgerButton } from "assets/svg/hamburger-icon.svg"
import { ReactComponent as CrossIcon } from "assets/svg/cross.svg"

//Hooks
import useTranslate from "hooks/useTranslate";
import english from "./locales/en-US.json";
import indo from "./locales/id.json";

const Tab = ({ path, display }) => (<a href={path}>{display}</a>);

const NDekstop = ({ Tabs, changeLanguage, language }) => {
  const activeLang = useCallback((lang) => lang == language ? "active" : "", [language])
  return (
    <div id='navbar'>
      <div className="navbar-dekstop">
        <div className='tabs-wrapper'>
          <AthleadLogo className='athlead-logo' />
          <div className='tabs'>
            {Tabs.map((t, key) => <Tab key={`nab-tab-${key}`} {...t} />)}
          </div>
        </div>

        <button onClick={changeLanguage} className="translation-toggler">
          <WorldIcon className='world-icon' />
          <p><span className={activeLang("id-ID")}>ID</span><span>{` / `}</span><span className={activeLang("en-US")}>Eng</span></p>
        </button>
      </div>
    </div>
  )
}

const NMobile = ({ Tabs, changeLanguage, language }) => {
  const location = useLocation();
  const activeLang = useCallback((lang) => lang == language ? "active" : "", [language])
  const [openTabs, setOpenTabs] = useState(false)
  
  useEffect(() => {
    setOpenTabs(false)
  }, [location.pathname])

  return (
    <div id='navbar'>
      {openTabs && (
        <div className='tabs-flag'>
          <div className='tabs'>
            <div className='header'>
              <AthleadLogo className='athlead-logo' />
              <CrossIcon onClick={() => setOpenTabs(false)} className='cross-icon' />
            </div>
            <div className='body'>
              {Tabs.map((t, key) => <Tab key={`nab-tab-${key}`} {...t} />)}
            </div>
          </div>
        </div>
      )}

      <div className="navbar-mobile">
        <div className='tabs-wrapper'>
          <HamburgerButton onClick={() => setOpenTabs(true)} className='hamburger-logo' />
          <AthleadLogo className='athlead-logo' />
        </div>

        <button onClick={changeLanguage} className="translation-toggler">
          <WorldIcon className='world-icon' />
          <p><span className={activeLang("id-ID")}>ID</span><span>{` / `}</span><span className={activeLang("en-US")}>Eng</span></p>
        </button>
      </div>
    </div>
  )
}

const Navbar = () => {
  const { changeLanguage, language, translate } = useTranslate(english, indo);

  const Tabs = useMemo(() => ([
    {
      path: "/partner",
      display: translate("partner")
    },
    {
      path: "/product",
      display: translate("product")
    },
    {
      path: "/about-us",
      display: translate("about")
    },
    {
      path: "/blog",
      display: translate("blog")
    },
    {
      path: "/career",
      display: translate("career")
    },
  ]), [language])

  const isResponsive = window.innerWidth <= 768
  return !isResponsive ? (<NDekstop Tabs={Tabs} changeLanguage={changeLanguage} language={language} />) : (<NMobile Tabs={Tabs} changeLanguage={changeLanguage} language={language} />)
}

export default Navbar