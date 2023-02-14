import React from 'react'
import styles from './card.module.css'

export default function Card(props) {
  const {img, name, type} = props.info;
return (
  {
    props.info
    ? 
    <div className={`card ${styles.card}`}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{type}</p>
      </div>
    </div>
    :
    <h1>No hay data</h1>
  }
 )
}
