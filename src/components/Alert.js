const Alert = (props)=> {
    return (
        <div className="alert">
              Can't Add New Product
              <ul>
                {
                    props.msg.map((message,index)=>{return <li key={index}>{message}</li>})
                }
              </ul>
            </div>
    );
}

export default Alert;