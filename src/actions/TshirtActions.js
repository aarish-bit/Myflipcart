
export const FetchTshirts = () => (dispatch) => {
    fetch('https://react-shopping-cart-67954.firebaseio.com/products.json')
    .then(res => res.json())
    .then(data => {
        console.log(data, 'data')
        return dispatch({ type:"FETCH_TSHIRTS", payload:data.products });
    })
}