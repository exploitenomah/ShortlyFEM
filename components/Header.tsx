
type HeaderProps = {
    Logo: Function,
    Navigation: JSX.Element
}

const HeaderLayout = ({ Logo, Navigation }: HeaderProps): JSX.Element => {
    return (
      <header
        className='flex justify-between items-center w-11/12 max-w-screen-lg mx-auto py-10 '>
        <Logo
          extraClasses='basis-1/2 sm:basis-1/5' />
        {Navigation}
      </header>
    )
}
export default HeaderLayout