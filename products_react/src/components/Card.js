import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Content as Content1}  from './Content'
import Button from '@mui/material/Button';



export default function MediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="/product.png"
      />
      <CardContent >
        <Content1 category="Sneakers" name={props.name} price={props.price}/>
      </CardContent>
      
      <CardActions>
        <Button variant="contained" color="success">Add To Cart</Button>    
      </CardActions>
    </Card>
  );
}