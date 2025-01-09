import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();
const AppContextProvider = (props) => {
    const [meals, setMeals] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/meals")
            .then(result => setMeals(result.data))
    }, [])
    const value = { meals, }
    return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
}
export default AppContextProvider;