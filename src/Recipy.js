import React from 'react'
import styles from './recipy.module.css'

function Recipy({title,calories,img,ingredients}) {
    return (
        <div  className={styles.recipe}>
            <img className={styles.image} src={img} alt="" />
            <h1 className={styles.title}>{title}</h1>
            <p>{calories}</p>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default Recipy
