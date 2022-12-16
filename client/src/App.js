
// import {connect} from 'react-redux'
// import AddNewProduct from './components/AddNewProduct.js'
// import Categories from './components/Categories.js'
import CategoryNav from './components/CategoryNav.js'
import DisplayProducts from './components/DisplayProducts.js'
import SearchBar from './components/SearchBar.js'
import * as actionCreators from './actions/actionTypes'
import CarouselComponent from './components/CarouselComponent.js'

const App = () => {
  return (
    <div>
      <SearchBar/>
      {/* <CarouselComponent/> */}
      <CategoryNav/>
      <DisplayProducts/>
    </div>
  )
}

export default App

// function App(props) {
//   let {products} = props
//   let product = products.map((product) => {
//     return <h1>{product.data}</h1>
//   })
// const handleIncrement = () => {
//   props.onIncrement()
// }
// const handleDecrement = () => {
//   props.onDecrement()
// }
//   return (
//     <div>
//     {/* <ul>
//       <li>{product}</li>
//       <h1>{props.count}</h1> 
//         <button onClick={handleIncrement}>Increment</button>
//         <button onClick={handleDecrement}>Decrement</button>
//     </ul> */}
//     {/* <AddNewProduct/> */}
//     <CategoryNav/>
    // <DisplayProducts/>
//     </div>
//   );
// }

// // mapDispatchToProps allows the dispatching to be accessible through the user of local properties 
// const mapDispatchToProps = (dispatch) => {
//   return {
    
//     onIncrement: () => dispatch(actionCreators.incrementCounter()), // onIncrement: () => dispatch({type: actionTypes.INCREMENT}),
//     onDecrement: () => dispatch({type: actionTypes.DECREMENT})
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     products: state.products,
//     count: state.counter
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(App); //(mapStateToProps,mapDispatchToProps)
