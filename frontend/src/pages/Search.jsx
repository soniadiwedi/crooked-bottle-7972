import { useSelector } from "react-redux"


export const Search = () => {
    const search = useSelector(store=>store.productReducer);
   
    if(search.isLoading){
        return (
            <p>Loading...</p>
        )
    }
    if(search.isError){
        return (
            <p>Something went wrong</p>
        )
    }
    return (
        <div>
            {
                search.products.map(e=>{
                    return (
                        <>
                        <img src={e.thumbnail} alt="" />
                        </>
                    )
                })
            }
        </div>
    )
}