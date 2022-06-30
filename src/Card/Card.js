import './Card.scss'
import React from 'react'

export default function Card({date, title, text, author}){

    const dateObj = new Date(date);

    return(
        <article className='card'>
            <div className='card__'>
                <p className='card__date'>{dateObj.getDate()} {dateObj.toLocaleString('ru', { month: 'long' })} {dateObj.getFullYear()}</p>
                <h3 className='card__title'>{title}</h3>
                <article className='card__text'>{text}</article>
            </div>
            <div className='card__author'>
                <p>
                    {author}
                </p>
            </div>
        </article>
    )
}