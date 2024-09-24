import style from './SiteDescription.module.scss'

export function SiteDescription({description}){

    return(
        <div className={style.descriptionStyling}>
            <p>{description}</p>
        </div>
    )
}