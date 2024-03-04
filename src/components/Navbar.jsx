import NavbarItem from './NavbarItem';

const NavBar = () => {
  return (
    <div className='flex dark:bg-blue-700 bg-blue-800 p-4 lg:text-lg justify-center gap-6 text-white'>
    <NavbarItem title='Trending' param='fetchTrending' />
    ||  
    <NavbarItem title='Top Rated' param='fetchTopRated' />
  </div>
  )
}

export default NavBar