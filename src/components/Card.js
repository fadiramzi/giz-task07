import img from '../img.png';
import Button from './Button';
import Img from './Img';
import {cardContent as Content} from './cardContent';

const Card = (props)=> {
    return (
        
        <div className="card">
            <Img img={img} alt="Product Image" />
            <Content category="Sneakers" name={props.name} price={props.price} />
            <Button class="btn" value="Add to Cart" />
          </div>
    
    );
}
 
export default Card;