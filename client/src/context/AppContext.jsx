import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppContextProvider = (props) => {

    const currency = import.meta.env.VITE_CURRENCY || 'USD';

    const navigate = useNavigate();

    const [allCourses, setAllCourses] = useState([]);

    const fetchallCourses = async () => {
        setAllCourses(dummyCourses);
    }

    useEffect(() => {
        fetchallCourses();
    }, []);

    const value = {
        currency , allCourses, navigate
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}