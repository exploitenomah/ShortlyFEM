
type shortenContainerProps = {
  children: JSX.Element
}
const ShortenContainer = ({
  children }: shortenContainerProps): JSX.Element => {

  return (
    <div>
     {children}
    </div> 

  )
}

export default ShortenContainer