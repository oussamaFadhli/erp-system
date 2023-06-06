import React from 'react'
interface SubTitleProps{
    title:string
}
const SubTitles:React.FC<SubTitleProps> = ({title}) => {
  return (
    <section className="flex flex-col mb-4">
        <h1 className="font-bold text-2xl text-gray-700">{title}</h1>
    </section>
  )
}

export default SubTitles