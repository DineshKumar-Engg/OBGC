//------------>>>>>>>>>>>>>>>>>FrontBanner Display scroll images
import image1 from '../Images/FrontBanner/image1.jpg'
import image2 from '../Images/FrontBanner/image2.jpg'
import image3 from '../Images/FrontBanner/image3.jpg'
import image4 from '../Images/FrontBanner/image4.jpg'
import image5 from '../Images/FrontBanner/image5.jpg'

//------------>>>>>>>>>>>>>>>>>Front category images

import cimage1 from './Category/cimage1.jpg'
import cimage2 from './Category/cimage2.jpg'
import cimage3 from './Category/cimage3.jpg'

//----------------------->>>>>>>>>>>>>>Front products display
import boy1 from './products/boy1.jpg'
import girl1 from './products/girl1.jpg'
import kids1 from './products/kids1.jpg'
import boy2 from './products/boy2.jpg'
import kids2 from './products/kids2.jpg'
import boy3 from './products/boy3.jpg'
import girl2 from './products/girl2.jpg'
import girl3 from './products/girl3.jpg'
import kids3 from './products/kids3.jpg'

//--------------------->>>>>>>>>>>>>>>>>>>>> Lastest Mens Products

import boy4 from './products/boy4.jpg'
import boy5 from './products/boy5.jpg'
import boy6 from './products/boy6.jpg'
import boy7 from './products/boy7.jpg'
import girl4 from './products/girl4.jpg'
import girl5 from './products/girl5.jpg'
import girl6 from './products/girl6.jpg'
import girl7 from './products/girl7.jpg'
import kids4 from './products/kids4.jpg'
import kids5 from './products/kids5.jpg'
import kids6 from './products/kids6.jpg'
import kids7 from './products/kids7.jpg'


//------------------->>>>>>>>>>>>>>>>>>>>>>> View Products



export const slideImage =[
    {
        _id:1,
        image:image1
    },
    {
        _id:2,
        image:image2
    },
    {
        _id:3,
        image:image3
    },
    {
        _id:4,
        image:image4
    },
    {
        _id:5,
        image:image5
    }
]



export const categoryImage=[
    {
        _id:1,
        title:'Men',
        image:cimage1
    },
    {
        _id:2,
        title:'Woman',
        image:cimage2
    },
    {
        _id:3,
        title:'kids',
        image:cimage3
    },
]


export const productsImage=[
    {
        _id:1,
        title:'Shirt',
        description:'Description for product 1',
        image:boy1,
        price:'90.00'
    },
    {
        _id:2,
        title:'Shirt',
        description:'Description for product 2',
        image:boy2,
        price:'95.00'
    },
    
    {
        _id:3,
        title:'Shirt',
        description:'Description for product 3',
        image:boy3,
        price:'110.00'
    },
    
    {
        _id:4,
        title:'Causal',
        description:'Description for product 1',
        image:girl1,
        price:'100.00'
    },
    {
        _id:5,
        title:'Causal',
        description:'Description for product 2',
        image:girl2,
        price:'120.00'
    },
    
    {
        _id:6,
        title:'Causal',
        description:'Description for product 3',
        image:girl3,
        price:'40.00'
    },
    {
        _id:7,
        title:'fancy',
        description:'Description for product 1',
        image:kids1,
        price:'80.00'
    },
    {
        _id:8,
        title:'fancy',
        description:'Description for product 2',
        image:kids2,
        price:'50.00'
    },
    {
        _id:9,
        title:'fancy',
        description:'Description for product 3',
        image:kids3,
        price:'110.00'
    },
     
]

export const MensProduct=[
    {
        _id:1,
        title:'Mens',
        image:boy4,
        price:'20.00'
    },
    {
        _id:2,
        title:'Mens',
        image:boy5,
        price:'80.00'
    },
    {
        _id:3,
        title:'Mens',
        image:boy6,
        price:'90.00'
    },
    {
        _id:4,
        title:'Mens',
        image:boy7,
        price:'20.00'
    }
]
export const GirlsProduct=[
    {
        _id:1,
        title:'Girl',
        image:girl4,
        price:'20.00'
    },
    {
        _id:2,
        title:'Girl',
        image:girl5,
        price:'80.00'
    },
    {
        _id:3,
        title:'Girl',
        image:girl6,
        price:'90.00'
    },
    {
        _id:4,
        title:'Girl',
        image:girl7,
        price:'20.00'
    },
]
export const KidsProduct=[
    {
        _id:1,
        title:'Kids',
        image:kids4,
        price:'20.00'
    },
    {
        _id:2,
        title:'Kids',
        image:kids5,
        price:'80.00'
    },
    {
        _id:3,
        title:'Kids',
        image:kids6,
        price:'90.00'
    },
    {
        _id:4,
        title:'Kids',
        image:kids7,
        price:'20.00'
    },
]

export const ViewProduct=[
    {
        _id:1,
        title:'Shirt',
        category:'Mens',
        desc:'Shirt For mens wear',
        image:require('./fullView/boy11.jpg'),
        images1:require('./fullView/boy12.jpg'),
        images2:require('./fullView/boy13.jpg'),
        images:require('./fullView/boy14.jpg'),
        price:'90.00'
    },
    {
        _id:2,
        title:'Shirt',
        category:'Mens',
        desc:'Shirt For mens wear',
        image:require('./fullView/boy21.jpg'),
        images1:require('./fullView/boy22.jpg'),
        images2:require('./fullView/boy23.jpg'),
        images:require('./fullView/boy24.jpg'),
        price:'95.00'
    },
    {
        _id:3,
        title:'Shirt',
        category:'Mens',
        desc:'Shirt For mens wear',
        image:require('./fullView/boy31.jpg'),
        images1:require('./fullView/boy32.jpg'),
        images2:require('./fullView/boy33.jpg'),
        images:require('./fullView/boy34.jpg'),
        price:'110.00'
    },
    {
        _id:4,
        title:'causal',
        category:'girls',
        desc:'Girls Modern wear',
        image:require('./fullView/girl11.jpg'),
        images1:require('./fullView/girl12.jpg'),
        images2:require('./fullView/girl13.jpg'),
        images:require('./fullView/girl14.jpg'),
        price:'100.00'
    },
    {
        _id:5,
        title:'causal',
        category:'girls',
        desc:'Girls Modern wear',
        image:require('./fullView/girl21.jpg'),
        images1:require('./fullView/girl22.jpg'),
        images2:require('./fullView/girl23.jpg'),
        images:require('./fullView/girl24.jpg'),
        price:'120.00'
    },
    {
        _id:6,
        title:'causal',
        category:'girls',
        desc:'Girls Modern wear',
        image:require('./fullView/girl31.jpg'),
        images1:require('./fullView/girl32.jpg'),
        images2:require('./fullView/girl33.jpg'),
        images:require('./fullView/girl34.jpg'),
        price:'40.00'
    },
    {
        _id:7,
        title:'Fancy',
        category:'kids',
        desc:'Kids Fancy Wear',
        image:require('./fullView/kids11.jpg'),
        images1:require('./fullView/kids12.jpg'),
        images2:require('./fullView/kids13.jpg'),
        images:require('./fullView/kids14.jpg'),
        price:'80.00'
    },
    {
        _id:8,
        title:'Fancy',
        category:'kids',
        desc:'Kids Fancy Wear',
        image:require('./fullView/kids21.jpg'),
        images1:require('./fullView/kids22.jpg'),
        images2:require('./fullView/kids23.jpg'),
        images:require('./fullView/kids24.jpg'),
        price:'50.00'
    },
    {
        _id:7,
        title:'Fancy',
        category:'kids',
        desc:'Kids Fancy Wear',
        image:require('./fullView/kids31.jpg'),
        images1:require('./fullView/kids32.jpg'),
        images2:require('./fullView/kids33.jpg'),
        images:require('./fullView/kids34.jpg'),
        price:'110.00'
    },
    
 ]