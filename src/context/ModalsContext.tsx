import { createContext, useState } from "react";
export const ModalsContext = createContext({})

export const ModalsProvider = ({children} : any) => {
  const [isDeliveryModalOpen, setDeliveryModalOpen] = useState(false)
  const [isCardModalOpen, setCardModalOpen] = useState(false)
  
  return (
    <ModalsContext value={{isDeliveryModalOpen, setDeliveryModalOpen, isCardModalOpen, setCardModalOpen}}>
      {children}
    </ModalsContext>
  )
}
 
export default ModalsProvider;