import { createContext, useEffect, useState } from "react";
import { helpHttp } from './../helpers/helpHttp';

export const UserContext = createContext();

const UserProvider = ({children}) => {

    const{ REACT_APP_URL_SERVER } = process.env;

    const [idNumber, setIdNumber] = useState(null);
    const [dataUser, setDataUser] = useState(null);
    const [error, setError] = useState(false);

    const api = helpHttp()
    const url = REACT_APP_URL_SERVER

    useEffect(() => {
        api.get(`${url}/employee/byIdentification/${idNumber}`).then(resp => {

            if(!resp.error || !idNumber ) {
                setDataUser(resp.model)
            } else {
                setDataUser(null)
                setError(true)
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [idNumber])

    const getIdUser = (id) => {
        setIdNumber(id)
    }

    const data = {
        getIdUser,
        setError,
        dataUser,
        error
    }

    return  <UserContext.Provider value={data}>
                {children}
            </UserContext.Provider>
}

export default UserProvider;