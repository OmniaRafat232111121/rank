import React from 'react'
interface Props{
  children:React.ReactNode
  className?:string
}
const Container = ({children,className}:Props) => {
  return (
    <div className={`${className} max-w-screen-xl mx-auto py-5 px-10 xl:px-0 space-x-3`}>
      {children}
    </div>
  )
}

export default Container
