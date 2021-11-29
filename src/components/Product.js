import React from 'react';
import PropTypes from 'prop-types';

export const ItemCard = props => (
    <div className="main">
      <div className="card">
        <img className="card-img-top" src={props.image}/>
        <div className="card-body">
          <h4 className="card-title text-center">{props.item.name}</h4>
          <div className="row justify-content-center mb-4">
            <p className="card-text">
              <span className="badge badge-secondary py-2 mr-5">Price</span>
              <span>${props.item.price}</span>
            </p>
          </div>
          <div className="row justify-content-center">
          </div>
        </div>
      </div>
    </div>
);

ItemCard.propTypes = {
  image: PropTypes.string.isRequired,
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  })
};