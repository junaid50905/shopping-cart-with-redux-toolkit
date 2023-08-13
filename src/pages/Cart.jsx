import { useSelector } from "react-redux"

const Cart = () => {
    const cartItems = useSelector(state=> state.cart)
    console.log(cartItems);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-10">
                  {
                      cartItems.map((cartItem, i) => {
                          return (
                              <div key={i} className="my-4 p-3 cart_item d-flex align-items-center justify-content-between">
                                  <img src={`${cartItem.image}`} alt="" style={{ height: '100px', width: '100px' }} />
                                  <h6 className="my-2 px-3" style={{ width: '400px' }}>{cartItem.title}</h6>
                                  <div className="d-flex align-items-center">
                                      <button className="btn btn-outline-primary">-</button>
                                      <h5 className="px-2 mt-2">1</h5>
                                      <button className="btn btn-outline-primary">+</button>
                                      <h5 className="mx-2"> X </h5>
                                      <h5 className="mx-2"> {cartItem.price}</h5>
                                      <h5 className="mx-2"> = </h5>
                                      <h5 className="mx-2">$ 490</h5>
                                      <button className="btn btn-small btn-danger">X</button>
                                  </div>
                              </div>
                          )
                      })
                  }
        </div>
      </div>
    </div>
  )
}

export default Cart
