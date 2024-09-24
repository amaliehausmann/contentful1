import styles from "./Header.module.scss";

export function Header({ title, imageURL }){
    return(
        <header className={styles.header} style={{backgroundImage: `url(${imageURL})`}}>
            <h1>{title}</h1>
        </header>
    )
}