import { useState } from "react";
import { MdNotInterested } from "react-icons/md";

const InputID = ({getUserValid}) => {

    const [idNumber, setIdNumber] = useState(null);
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!Number(idNumber) || Number(idNumber) < 0 ) {
            setError(true)
            return
        }
        setError(false)
        getUserValid(idNumber)
    }

    return (

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
                                    onChange={ e => setIdNumber(e.target.value) }
                                    className="form-control" 
                                    placeholder="Número de cédula" />
                            </div>
                            <div className="col-12 col-md-4 d-flex my-1 p-0 pl-0 pl-sm-2">
                                <button 
                                    type="submit" 
                                    name="backward" 
                                    className="align-self-stretch backward bg-warning mt-sm-0 w-100">
                                    EMPECEMOS!
                                </button>
                            </div>
                        </div>
                    </div>
                </form>

                {
                    error &&
                    <div className="alert alert-danger" role="alert">
                        <MdNotInterested /> Por favor, ingrese un número de cédula válido.
                    </div>
                }


            </div>
        </div>
    )
}

export default InputID
