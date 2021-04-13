import React from 'react';
import {Link} from '@reach/router';

const ProductList = (props) =>{

    const {product} = props;

    return(
        <div className="mt-8">
            <hr/>
            <h1 className="text-2xl pt-5">All Products:</h1>
            {
                product.map((item, index)=>{
                    return <div key={index}>
                        <Link  to={`/product/${item._id}`}><p className="capitalize underline inline-block">{item.name}</p></Link>
                        </div>             
                })
            }
        </div>
    )
}

export default ProductList;