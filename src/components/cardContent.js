const cardContent = (props)=> {
    return (
        <div className="card-content">
                <div>
                  <p className="category">{props.category}</p>
                  <p className="name">{props.name}</p>
                </div>
                <p className="price">{props.price}$</p>
        </div>
    );
}

export {cardContent};