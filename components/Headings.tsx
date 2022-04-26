
type headingProps = {
  children: JSX.Element,
  extraClasses?: string
}

export const HeadingOne = ({
  children,
  extraClasses }: headingProps): JSX.Element => {
  return (
    <h1
      className={`capitalize ${extraClasses}`}> 
      {children}
    </h1>
  )
}

export const HeadingTwo = ({
  children,
  extraClasses }: headingProps): JSX.Element => {
  return (
    <h2
      className={` capitalize ${extraClasses}`}> 
      {children}
    </h2>
  )
}
export const HeadingThree = ({
  children, 
  extraClasses }: headingProps): JSX.Element => {
  return (
    <h3
      className={`capitalize ${extraClasses}`}> 
      {children}
    </h3>
  )
}
export const HeadingFour = ({
  children,
  extraClasses }: headingProps): JSX.Element => {
  return (
    <h3
      className={`capitalize ${extraClasses}`}> 
      {children}
    </h3>
  )
}