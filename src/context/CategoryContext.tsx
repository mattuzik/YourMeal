import { createContext, useState } from "react";

export const CategoryContext = createContext({})

export const CategoryProvider = ({children} : any) => {
  const [currentCategory, setCurrentCategory] = useState(0)
  
  return (
    <CategoryContext value={{currentCategory, setCurrentCategory}}>
      {children}
    </CategoryContext>
  )
}
 
export default CategoryProvider;