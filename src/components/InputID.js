import { useState, useContext } from "react";
// context
import { UserContext } from './../context/UserContext';
// Icons
import { MdNotInterested } from "react-icons/md";
// Components
import WelcomeUser from './WelcomeUser';

const InputID = () => {

    const { getIdUser, setError, error, dataUser } = useContext(UserContext)

    const [idUser, setIdUser] = useState('');
    const [disableButton, setDisabledButton] = useState(true)

    const handleChange = (e) => {
        setIdUser(e.target.value);

        (idUser.length <= 5 )
        ? setDisabledButton(true) 
        : setDisabledButton(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!Number(idUser) || Number(idUser) < 0 ) {
            setError(true)
            return
        }
        setError(false)
        getIdUser(idUser)
    }

    return (
        <>
        {
            (!dataUser) ?
            <div className="align-items-center d-flex justify-content-center">
                <div id="wizard_container mt-5 mt-lg-0">
                    <form onSubmit={ handleSubmit }
                        className="jumbotron bg-white px-1 py-3 mb-3">
                        <div className="align-items-center col-12 d-flex flex-column">
                            <h3 className="main_question mb-3 text-body text-center">
                                Ingrese su número de cédula para  comenzar la encuesta.
                            </h3>
                            <div className="row w-100">
                                <div className="col-12 col-md-8 my-1 p-0">
                                    <input 
                                        type="number" 
                                        name="idUser"
                                        onPaste={(e)=>{ e.preventDefault(); return false; }} 
                                        onCopy={(e)=>{ e.preventDefault(); return false; }}
                                        value={idUser}
                                        onInput={handleChange}
                                        className="form-control" 
                                        placeholder="Número de cédula" />
                                </div>
                                <div className="col-12 col-md-4 d-flex my-1 p-0 pl-0 pl-sm-2">
                                    <button 
                                        disabled={disableButton}
                                        type="submit" 
                                        name="backward" 
                                        className="align-self-stretch backward bg-warning mt-sm-0 w-100">
                                        Consultar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    {
                        error &&
                        <div className="alert alert-danger" role="alert">
                            <MdNotInterested /> Número invalido / No encontrado
                        </div>
                    }
                </div>
            </div> :   
            <WelcomeUser />
        }
        </>
    )
}

export default InputID
