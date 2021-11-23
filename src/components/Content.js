import pic1 from './assisst/1.jpg'
import pic2 from './assisst/2.jpg'
import pic3 from './assisst/3.jpg'
import pic4 from './assisst/4.jpg'
import pic5 from './assisst/5.jpg'

const Content = () => {
    return (
        [
            {
                id:1,
                productName:'Headphone',
                productPrice:'25000 IQD',
                productDiscription:'red Headphone',
                productImg:pic1,
            },
            {
                id:2,
                productName:'Realme Gt 5G',
                productPrice:'700000 IQD',
                productDiscription:'Realme phone',
                productImg:pic5,
            },
            {
                id:3,
                productName:'Laptop',
                productPrice:'400000 IQD',
                productDiscription:'Huawi laptop',
                productImg:pic4,
            },
            {
                id:4,
                productName:'Sunglasses',
                productPrice:'50000 IQD',
                productDiscription:'black sunglasses',
                productImg:pic2,
            },
            {
                id:5,
                productName:'Watch',
                productPrice:'20000 IQD',
                productDiscription:'Beautiful woman watch',
                productImg:pic3,
            }
        ]
    )
}

export default Content
