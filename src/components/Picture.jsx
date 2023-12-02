import React from 'react';
import styleStyle from "../styles/style.module.css" ;


const Picture = ({img}) => {
  return (

         <img className={styleStyle.picture} src={img.large} alt="" />
    
  )
}

export default Picture