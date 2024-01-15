import { createContext, useContext, useState } from 'react'


const AppContext = createContext();
  

 export const Appprovider = ({children})=>{
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
   const [isSidebarClose, setIsSidebarClose] = useState(true);
   

   const openSideBar = ()=>{
    setIsSidebarOpen(true);
   }


    const closeSideBar = () => {
      setIsSidebarOpen(false);
    }


  return(
    <AppContext.Provider value={{isSidebarOpen, isSidebarClose, openSideBar, closeSideBar}}>
     {children}
    </AppContext.Provider>
  )
}


export const useGlobalContext = ()=>{
  return useContext(AppContext)
}