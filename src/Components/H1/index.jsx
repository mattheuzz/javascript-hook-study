import { useContext } from "react"
import { GlobalContext } from "../../contexts/App/index"

export const H1 = () =>{
    const theContext = useContext(GlobalContext)
    const { state: { title, counter } } = theContext
    return(
      <>
        <h1>
          {title}
        </h1>
        <h1>  
          {counter}
        </h1>
      </>
    )
  }