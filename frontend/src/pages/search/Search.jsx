import { useSelector } from "react-redux"
import "./Search.css"
import Header from "../../components/LandingPage/Header/Header";
import { Link, NavLink } from "react-router-dom";

export const Search = () => {
    const search = useSelector(store=>store.productReducer);
   
    if(search.isLoading){
        return (
            <div className="loading-indicator" >Loading...</div>
        )
    }
    if(search.isError){
        return (
            <p>Something went wrong</p>
        )
    }

    //////////////////////////////////////////////////////

    return (
        <div>
            <Header/>
            {
                search.products.map(el=>{
                    return (
                        
                        <div className="product-page">
      <div className="product-image">
        <img src={el.thumbnail} alt={el.category_name} />
      </div>
      <div className="product-details">
        <h1 className="product-name">{el.category_name}</h1>
        <h2 className="product-price">₹{el.price}</h2>
        <div className="product-rating">
          <span className="product-rating-value">{el.rating}</span>
          <span className="product-rating-stars">★★★★★</span>
         
        </div>
        <div className="product-availability">Available Stock:-  {el.stock}</div>
        <div className="product-seller">
          Sold by <span className="product-seller-name">FLipkart Limited</span>
         
        </div>
        <div className="product-description">{el.description}</div>
        <NavLink to={`/single/${el.id}`}>
        <button  className="buy-button" >Know More</button>
        </NavLink>
      </div>
    </div>
                       
                    )
                })
            }
        </div>
    )
}