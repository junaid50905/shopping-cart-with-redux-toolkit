import { useDispatch } from "react-redux"
import { add } from "../features/cart/cartSlice"



const Product = (props) => {
    const {title, image, price} = props.product

    const dispatch = useDispatch()

    const addHandler= (product)=>{
        dispatch(add(product))
    }
    // Truncate title if longer than 30 characters
    const truncatedTitle = title.length > 30 ? `${title.substring(0, 20)}...` : title;
  return (
      <div className="col-md-3 mb-4" style={{ minHeight: '200px' }}>
          <div className="product p-3">
              <img src={`${image}`} className="card-img-top img-fluid" alt="Product" style={{ height: '100px', width: '100px' }}/>
              <div>
                  <h6>{truncatedTitle}</h6>
                  <div className="d-flex justify-content-between">
                      <h5>$ {price}</h5>
                      <a className="btn btn-primary btn-small" onClick={() => addHandler(props.product)}>Add to cart</a>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Product
