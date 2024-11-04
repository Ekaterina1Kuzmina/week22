import React from 'react'

function CreateCard({props}) {
    const {name, universe, alterego, occupation, friends, superpowers, url, info} = props;
  return (
    <div className="card">    
    <img src={url} alt={name} width="300px" height="400px"/>
        <h3>{name}</h3>
    <div className="cardBody">
        <p><b>Вселенная:</b> {universe}</p>
        <p><b>Альтерэго:</b> {alterego}</p>
        <p><b>Род деятельности:</b> {occupation}</p>
        <p><b>Друзья:</b> {friends}</p>
        <p><b>Суперсила:</b> {superpowers}</p>
        <p><b>Информация:</b> {info}</p>
    </div>
    </div>
);
}
export default CreateCard

