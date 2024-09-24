
export function Header({title, imageURL}){
    return(
        <header style={{backgroundImage: `url(${imageURL})`}}>
            <h1>{title}</h1>
        </header>
    )
}