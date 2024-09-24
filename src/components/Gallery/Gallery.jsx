export function Gallery({imageURL, imageALT, description}){

    return(
        <section>
            <img src={imageURL} alt={imageALT} />
            <p>{description}</p>
        </section>
    )
}