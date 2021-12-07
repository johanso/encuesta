import { createContext, useState, useEffect } from "react";
import { helpHttp } from './../helpers/helpHttp';

export const UserContext = createContext();

const UserProvider = ({children}) => {

    const [dataForm, setDataform] = useState([]);

    const api = helpHttp()
    const url = "http://34.238.123.231:3080"

    const dataInputUser = {
        email: "administracion@qvort.com",
        password: "Cota@2021"
    }

    useEffect(() => {
        api.get(url + `/employee/byIdentification/11201970`, dataInputUser).then(resp => {
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