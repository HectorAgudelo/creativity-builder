// let total = 0;

// function addToCart(cart, item) {
//   total += item.price;
//   cart.push(item);
//   return cart;
// }

// inside a React component
// const [cart, setCart] = useState([]);

// function handleAdd(item) {
//   setCart(addToCart(cart, item));
// }


const cart = []

function handleAdd(arr, item){
    return [...arr, item]
}
console.log(cart)
console.log(handleAdd(cart,'one'))
console.log(handleAdd(cart,'one') === cart) //false
console.log(handleAdd(cart,'one'))


