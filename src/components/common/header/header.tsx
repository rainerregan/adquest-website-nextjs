import AppIcon from './app-icon'
import LangSelector from './lang-selector'
import HeaderMenu, { HeaderMenuItem } from './menu/header-menu'

const Header = () => {
  const headerMenu: HeaderMenuItem[] = [
    { title: 'Products', link: '/products' },
    { title: 'Services', link: '/Services' },
    { title: 'About Us', link: '/about-us' },
  ]

  return (
    <nav className='flex justify-between items-center h-[72px] shadow-lg sticky top-0 px-[100px] bg-white'>
      <AppIcon />

      <div className='right-menu flex gap-12 items-center font-semibold text-main-green'>
        <HeaderMenu items={headerMenu} />
        <LangSelector />
      </div>
    </nav>
  )
}

export default Header