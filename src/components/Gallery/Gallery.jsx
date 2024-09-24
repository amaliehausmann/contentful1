import style from './Gallery.module.scss'

export function Gallery({imageURL, imageALT, description}){

    return(
        <div className={style.galleryStyling} >
            <img src={imageURL} alt={imageALT} />
            <p>{description}</p>
        </div>
    )
}