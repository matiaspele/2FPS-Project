import { createContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {
    const initialValue ={
        correo: "",
        name: "",
        isLogin: false,
    };

    const [user, setUser] = useState(()=>{
        const saved = localStorage.getItem("user");
        return saved ? JSON.parse(saved) : initialValue;
    });

    useEffect(()=>{
        if(user.isLogin){
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    const logIn = (email,name) =>
        setUser({
            correo: email,
            name,
            isLogin : true,
        });
    const logOut = () => {
        setUser(initialValue);
        localStorage.removeItem("user");
    };

    const datos = {
        user,
        logIn,
        logOut
    };
    return <UserContext.Provider value={datos}>{children}</UserContext.Provider>
}