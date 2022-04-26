


type paragraphProps = {
  children: JSX.Element,
  extraClasses: string
}

export const PBasic= ({
  children,
  extraClasses }: paragraphProps): JSX.Element => {

  return (
    <p
      className={`text-base text-grayish-violet tracking-wide	 ${extraClasses}`}
    >
      {children}
    </p>
  )
}

