import './Card.scss'
import React from 'react'

export default function Card({date, title, text, author}){

    const dateObj = new Date(date);

    return(
        <article className='card'>
            <div className='card__wrapper'>
                <p className='card__date text'>{dateObj.getDate()} {dateObj.toLocaleString('ru', { month: 'long' })} {dateObj.getFullYear()}</p>
                <h3 className='card__title text'>{title}</h3>
                <article className='card__text text text_normal'>{text}</article>
            </div>
            <div className='card__author'>
                <p className='card__name text text_small'>{author}</p>
            </div>
        </article>
    )
}