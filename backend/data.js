const bcrypt = require('bcryptjs')

const data={
    User:[
        {
            name:"dinesh",
            email:"admin@gmail.com",
            password:bcrypt.hashSync("Admin@#1234"),
            isAdmin:true
        },
        {   
            name:"kumar",
            email:"kumar@gmail.com",
            password:bcrypt.hashSync("Dinesh@#1036"),
            isAdmin:false
        },
    ],
    Slider:[
        {
            image:"/Images/FrontBanner/image1.jpg"
        },
        {
            image:"/Images/FrontBanner/image2.jpg"
        },
        {
            image:"/Images/FrontBanner/image3.jpg"
        },
        {
            image:"/Images/FrontBanner/image4.jpg"
        },
        {
            image:"/Images/FrontBanner/image5.jpg"
        },
        {
            image:"/Images/FrontBanner/image6.jpg"
        },{
            image:"/Images/FrontBanner/image7.jpg"
        }
     ],
    Category:[
        {
            
            title:'Mens',
            image:"/Images/Category/cimage1.jpg"
        },
        {
            
            title:'Girls',
            image:"/Images/Category/cimage2.jpg"
        },
        {
            
            title:'Kids',
            image:"/Images/Category/cimage3.jpg"
        },
    ],
    ScrollProducts:[
    {
        MensProduct:[
            {
                _id:1,
                title:'Mens',
                image:'/Images/products/boy4.jpg',
                price:'20.00'
            },
            {
                _id:2,
                title:'Mens',
                image:'/Images/products/boy5.jpg',
                price:'80.00'
            },
            {
                _id:3,
                title:'Mens',
                image:'/Images/products/boy6.jpg',
                price:'90.00'
            },
            {
                _id:4,
                title:'Mens',
                image:'/Images/products/boy7.jpg',
                price:'20.00'
            }
        ],
        GirlsProduct:[
            {
                _id:1,
                title:'Girl',
                image:'/Images/products/girl4.jpg',
                price:'20.00'
            },
            {
                _id:2,
                title:'Girl',
                image:'/Images/products/girl5.jpg',
                price:'80.00'
            },
            {
                _id:3,
                title:'Girl',
                image:'/Images/products/girl5.jpg',
                price:'90.00'
            },
            {
                _id:4,
                title:'Girl',
                image:'/Images/products/girl6.jpg',
                price:'20.00'
            }
        ],
        KidsProduct:[
            {
                _id:1,
                title:'Kids',
                image:'/Images/products/kids4.jpg',
                price:'20.00'
            },
            {
                _id:2,
                title:'Kids',
                image:'/Images/products/kids5.jpg',
                price:'80.00'
            },
            {
                _id:3,
                title:'Kids',
                image:'/Images/products/kids6.jpg',
                price:'90.00'
            },
            {
                _id:4,
                title:'Kids',
                image:'/Images/products/kids7.jpg',
                price:'20.00'
            }
        ],
    } 
],
    Product:[
        {
        
            title:'Shirt-1',
            slug:'product1',
            category:'Mens',
            desc:'Shirt For mens wear',
            image:"/Images/fullView/boy11.jpg",
            images1:"/Images/fullView/boy12.jpg",
            images2:"/Images/fullView/boy13.jpg",
            images3:"/Images/fullView/boy14.jpg",
            CountOfStock:'5',
            price:'90.00'
        },
        {
        
            title:'Shirt-2',
            slug:'product2',
            category:'Mens',
            desc:'Shirt For mens wear',
            image:"/Images/fullView/boy21.jpg",
            images1:"/Images/fullView/boy22.jpg",
            images2:"/Images/fullView/boy23.jpg",
            images3:"/Images/fullView/boy24.jpg",
            CountOfStock:'6',
            price:'95.00'
        },
        {
        
            title:'Shirt-3',
            slug:'product3',
            category:'Mens',
            desc:'Shirt For mens wear',
            image:"/Images/fullView/boy31.jpg",
            images1:"/Images/fullView/boy32.jpg",
            images2:"/Images/fullView/boy33.jpg",
            images3:"/Images/fullView/boy34.jpg",
            CountOfStock:'20',
            price:'110.00'
        },
        {
        
            title:'causal-1',
            slug:'product4',
            category:'Girls',
            desc:'Girls Modern wear',
            image:'/Images/fullView/girl11.jpg',
            images1:'/Images/fullView/girl12.jpg',
            images2:'/Images/fullView/girl13.jpg',
            images3:'/Images/fullView/girl14.jpg',
            CountOfStock:'15',
            price:'100.00'
        },
        {
        
            title:'causal-2',
            slug:'product5',
            category:'Girls',
            desc:'Girls Modern wear',
            image:'/Images/fullView/girl21.jpg',
            images1:'/Images/fullView/girl22.jpg',
            images2:'/Images/fullView/girl23.jpg',
            images3:'/Images/fullView/girl24.jpg',
            CountOfStock:'5',
            price:'120.00'
        },
        {
        
            title:'causal-3',
            slug:'product6',
            category:'Girls',
            desc:'Girls Modern wear',
            image:'/Images/fullView/girl31.jpg',
            images1:'/Images/fullView/girl32.jpg',
            images2:'/Images/fullView/girl33.jpg',
            images3:'/Images/fullView/girl34.jpg',
            CountOfStock:'10',
            price:'40.00'
        },
        {
        
            title:'Fancy-1',
            slug:'product7',
            category:'Kids',
            desc:'Kids Fancy Wear',
            image:'/Images/fullView/kids11.jpg',
            images1:'/Images/fullView/kids12.jpg',
            images2:'/Images/fullView/kids13.jpg',
            images3:'/Images/fullView/kids14.jpg',
            CountOfStock:'9',
            price:'80.00'
        },
        {
        
            title:'Fancy-2',
            slug:'product8',
            category:'Kids',
            desc:'Kids Fancy Wear',
            image:'/Images/fullView/kids21.jpg',
            images1:'/Images/fullView/kids22.jpg',
            images2:'/Images/fullView/kids23.jpg',
            images3:'/Images/fullView/kids24.jpg',
            CountOfStock:'7',
            price:'50.00'
        },
        {
        
            title:'Fancy-3',
            slug:'product9',
            category:'Kids',
            desc:'Kids Fancy Wear',
            image:'/Images/fullView/kids31.jpg',
            images1:'/Images/fullView/kids32.jpg',
            images2:'/Images/fullView/kids33.jpg',
            images3:'/Images/fullView/kids34.jpg',
            CountOfStock:'25',
            price:'110.00'
        },
        
     ]
    
}

module.exports= data



