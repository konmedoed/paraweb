import './Carousel.scss';
import CarouselImg from '../img/K4C.png'
import { useState } from "react";

export default function Carousel(){
    const [frameNumber, setFrameNumber] = useState(0);

    setTimeout(nextFrame, 5000);

    function nextFrame(){
        setFrameNumber(1)
        if (frameNumber===2)
            setFrameNumber(0)
        else {
            setFrameNumber(frameNumber+1);
            }
        
    }

    const framesArray = [
        <div className='carousel__frame frame1'>
            <img  className='carousel__img' src={CarouselImg} alt=''/>
            <div className='carousel__frame-content-wrapper'>
                <h1 className='carousel__frame-title text text_large'>Как бизнесу сохранять<br/>IT-кадры на фоне кризиса</h1>
                <h2 className='carousel__frame-content text text_normal'>Инструменты, которые могут использовать компании для удержания сотрудников</h2>
                <button className='carousel__more-info-button text text_normal'>Подробнее</button>
            </div>
        </div>,
        <div className='carousel__frame frame2'>
            <img  className='carousel__img' src={CarouselImg} alt=''/>
            <div className='carousel__frame-content-wrapper'>
                <h1 className='carousel__frame-title text text_large'>Как бизнесу сохранять<br/>IT-кадры на фоне кризиса (1)</h1>
                <h2 className='carousel__frame-content text text_normal'>Инструменты, которые могут использовать компании для удержания сотрудников (1)</h2>
                <button className='carousel__more-info-button text text_normal'>Подробнее</button>
            </div>
        </div>,
        <div className='carousel__frame frame3'>
            <img  className='carousel__img' src={CarouselImg} alt=''/>
            <div className='carousel__frame-content-wrapper'>
                <h1 className='carousel__frame-title text text_large'>Как бизнесу сохранять<br/>IT-кадры на фоне кризиса(2)</h1>
                <h2 className='carousel__frame-content text text_normal'>Инструменты, которые могут использовать компании для удержания сотрудников(2)</h2>
                <button className='carousel__more-info-button text text_normal'>Подробнее</button>
            </div>
        </div>
    ]

    return (
        <article className='carousel'>
          {framesArray[frameNumber]}
        </article>
    )
}