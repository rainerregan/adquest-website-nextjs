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
    <nav className='shadow-lg sticky top-0 z-50 bg-white'>
      <div className='flex justify-between items-center h-[72px] max-w-7xl m-auto px-[24px]'>
        <AppIcon />

        {/* Desktop */}
        <div className='hidden lg:flex right-menu gap-12 items-center font-semibold text-main-green'>
          <HeaderMenu items={headerMenu} />
          <LangSelector />
        </div>
      </div>
    </nav>
  )
}

export default Header