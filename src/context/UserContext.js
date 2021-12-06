import { createContext, useEffect } from "react";
import { helpHttp } from './../helpers/helpHttp';

export const UserContext = createContext();

const UserProvider = ({children}) => {

    const api = helpHttp()
    const url = "/employee/byIdentification/11201970"

    const dataInputUser = {
        email: "administracion@qvort.com",
        password: "Cota@2021"
    }

    useEffect(() => {
        api.post(url, dataInputUser).then(resp => {
            console.log(resp)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    const data = { }

    return  <UserContext.Provider value={data}>
                {children}
            </UserContext.Provider>
}

export default UserProvider;