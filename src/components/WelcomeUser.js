import React, {useContext, useState} from 'react'
// context
import { UserContext } from './../context/UserContext';
import MultiStepForm from './MultiStepForm';

const WelcomeUser = () => {

    const { dataUser } = useContext(UserContext)

    const [chkValue, setChkValue] = useState(false);
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            {
                !showForm ?
                <>
                    <div className="main_title_1 text-center">
                        <h3 className="small">Hola <span className="text-warning">{dataUser.name}</span> <br /> 
                            Bienvenido a la Encuesta de Diaganostico de Clima Organizacional de la Alcaldía Municipal de Cota 2021</h3>
                        <p className="text-left">La siguiente de  encuesta va a tomarte entre <span className="dash">10 y 15</span> minutos y servirá para seguir creciendo y mejorando como entiendad. </p>
                        <p className="text-left">Por favor tomate tu tiempo y responde de la manera mas honesta posible.</p>
                    </div>
                    
                    <div className="review_block mt-4">
                        <div className="checkbox_radio_container">
                            <input 
                                type="checkbox" 
                                id="terms" 
                                name="terms" 
                                defaultChecked={chkValue}
                                onClick={()=>setChkValue(!chkValue)}
                                className="required" 
                                value="" />
                            <label className="checkbox mt-2" htmlFor="terms"></label>
                            <label htmlFor="terms" className="wrapper text-left">Autorizo a la empresa Nueva CIGLOP SAS para que la empresa tenga acceso al tratamiento y proceder a guardar sus datos personales de conformidad con la Ley 1581 de 2012</label>
                        </div>
                    </div>

                    <button 
                        disabled={!chkValue}
                        onClick={() => setShowForm(true)}
                        type="submit" 
                        name="backward" 
                        className="align-self-stretch backward bg-warning mt-3 w-100">
                        Comenzar!
                    </button>
                </> :
                <MultiStepForm />
            }
        </>
    )
}

export default WelcomeUser
