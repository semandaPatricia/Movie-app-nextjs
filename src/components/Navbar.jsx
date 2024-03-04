import NavbarItem from './NavbarItem';

const NavBar = () => {
  return (
    <div className='flex dark:bg-blue-700 bg-amber-100 p-4 lg:text-lg justify-center gap-6'>
    <NavbarItem title='Trending' param='fetchTrending' />
    ||  
    <NavbarItem title='Top Rated' param='fetchTopRated' />
  </div>
  )
}

export default NavBar