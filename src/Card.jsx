import './Card.css'

function Card(props) {
    return (
        <div className="Card">
            <div className="img"/>
            <div className="desc">{ props.desc }</div>
            <div className="info">
                <span className="name"> { props.name } </span>
                <div className="spacer"/>
                <span className="price"> { props.price }$ </span>
            </div>
            <input className="btn_add_to_cart" type="button" value="Add To Cart" />
        </div>
    )
}

export default Card
