import style from "./Header.module.scss";

export function Header({ title, imageURL }){
    return(
        <header className={style.headerStyling} style={{backgroundImage: `url(${imageURL})`}}>
            <h1>{title}</h1>
        </header>
    )
}