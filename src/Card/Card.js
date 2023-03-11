import './Card.scss'
import React from 'react'

export default function Card({date, title, text, author}){

    const dateObj = new Date(date);

    const content = text.slice(0, text.indexOf('[+'));

    return(
        <article className='card'>
            <div className='card__wrapper'>
                <p className='card__date text card-text_small'>{dateObj.getDate()} {dateObj.toLocaleString('ru', { month: 'long' })} {dateObj.getFullYear()}</p>
                <h3 className='card__title text card-text_large'>{title}</h3>
                <p className='card__content text card-text_normal'>{content}</p>
            </div>
            <div className='card__author'>
                <p className='card__name text card-text_small'>{author}</p>
            </div>
        </article>
    )
}