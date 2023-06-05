import React from "react";
import { Link } from "react-router-dom";
interface HomeIconsType{
  photo:string
  title:string
  accessibilite:string
  links:string
}
const HomeIcons: React.FC<HomeIconsType> = ({photo,title,accessibilite,links}) => {
  return (
    <>
      <div className="max-w-sm w-56 pt-2 ml-8 bg-gray-100 rounded overflow-hidden shadow-lg justify-center items-center flex">
        <Link to ={links}>
          <img src={photo} alt={accessibilite} className="w-20"/>
          <div className="font-bold text-xl mb-2 text-center">{title}</div>
        </Link>
      </div>
    </>
  );
};

export default HomeIcons;
