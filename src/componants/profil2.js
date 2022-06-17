import React from 'react'

export const Profil2 = ({user}) => {
    const {name,age,adress}=user;
  return (
    <div>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <h2>{adress}</h2>
    </div>
  )
}
