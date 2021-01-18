import { FETCH_PRODUCT } from "../Type";

export const fetchProducts= () => {
    return  async (dispatch)=>{
        const res=await fetch("/api/products");
         dispatch({
            type:FETCH_PRODUCT,
            payload:res.data,
        })
    }
    
}