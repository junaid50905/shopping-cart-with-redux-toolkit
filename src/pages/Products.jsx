import axios from "axios";
import { useEffect, useState } from "react"
import Product from "./Product";

const Products = () => {
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res=> {
                setProducts(prevItems => [...prevItems, ...res.data])
            })
            .catch(err=>{
                console.log(err.message);
            })
    }, []);
    
    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        {
                            products.map((product, i)=>{
                                return(
                                    <Product key={i} product={product}/>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products
