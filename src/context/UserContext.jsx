import { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {
    const initialValue ={
        correo: "invitado@gmail.com",
        name: "Invitado",
        isLogin: false,
    };

    const [user, setUser] = useState(initialValue);

    const logIn = (email,name) =>
        setUser({
            correo: email,
            name,
            isLogin : true,
        });
    const logOut = () => setUser(initialValue);

    const datos = {
        user,
        logIn,
        logOut
    };
    return <UserContext.Provider value={datos}>{children}</UserContext.Provider>
}