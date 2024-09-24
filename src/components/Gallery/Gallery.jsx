import style from './Gallery.module.scss'

export function Gallery({imageURL, imageALT, description}){

    return(
        <div className={style.galleryStyling} >
                  <img src="../src/assets/KasperCertifiedbg.png" alt="Dette er Kasper Certified" className={style.KasperCertified} />
            <img src={imageURL} alt={imageALT} />
            <p>{description}</p>
        </div>
    )
}