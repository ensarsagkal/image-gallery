import React from 'react'

const Picture = ({img}) => {
  return (
    <div>
         <img src={img.large} alt="" />
    </div>
  )
}

export default Picture