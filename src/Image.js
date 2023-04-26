export default function Image(props){
    return(
        <>
            <article className="shadow-md bg-white rounded-3xl p-5">
                <img src={props.url.full} alt={props.user.name} />
            </article>
        </>
    )
}