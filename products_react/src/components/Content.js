import Typography from '@mui/material/Typography';


const Content = (props)=> {
    return (
        <div>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{props.category}</Typography>
            <Typography variant="h5" component="div">{props.name}</Typography>
            <br />
            <Typography variant="h5" component="div">{props.price}$</Typography>
            
        </div>

    );
}

export {Content};