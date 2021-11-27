import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Input from './components/Input';
import Product from './components/Product';
import MyButtons from './components/MyButtons';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      'searchValue': "",
      'productName': "",
      'productPrice': "",
      'products': [],
      'filterdProducts': []
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  



  onNameChange(e) {
    this.setState({'productName': e.target.value})
  }

  onPriceChange(e) {
    this.setState({'productPrice': e.target.value})
  }

 


  onAdd(e) {
    let Products = Array.from(this.state.products)
    let Product = new Object()
    Product.name = this.state.productName
    Product.price = this.state.productPrice
    Products.push(Product)
    this.setState({'products': Products, 'filterdProducts':Products, 'productName':"", 'productPrice':""})
  }


  render() { 
    return (
        <div className= "container-1">
          <Box component="form"
              sx={{'& > :not(style)': { m: 1, width: '25ch' },}}autoComplete="off"
          >
          <Input 
          value={this.state.searchValue}
          lablevalue = "Search"
          />

          <Input
            lablevalue = "Price"
            value={this.state.productPrice}
            handelChange={this.onPriceChange}      />
          <Input
            lablevalue = "Name"
            value={this.state.productName}
            handelChange={this.onNameChange}      />

          <MyButtons value = "Add" variant="contained" handelClick={this.onAdd}  sx={{ ml: 10 }} size = "large"  color="success" />
          
          </Box>
          
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              
                <Grid item xs={2} sm={4} md={4} >
                    <Product products={this.state.filterdProducts} />
                </Grid>
            </Grid>
          </Box>
      </div>
      );
  }
}
 

export default App;