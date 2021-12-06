import React, {useContext} from 'react'
import { AiOutlineBars } from "react-icons/ai";
// context
import { QuestionContext } from './../context/QuestionsContext';

const InfoQuestions = () => {

    const {currentItems} = useContext(QuestionContext)
    const typeQuestion = currentItems[0].option_type;

    return (
        <>
            {
                typeQuestion === 'YesNo' 
                ?   <div className="main_title_1">
                        <h1 className="text-warning"><AiOutlineBars /> CUESTIONARIO CLIMA ORGANIZACIONAL</h1>
                        <h4 className="text-left mb-1">ORGANIZACION Y CATEGORIZACION DE ITEMS DEL CUSTIONARIO SEGUN SU ESCALA DE EVALUACION: </h4>
                        <p className="mt-3">Por favor conteste <em className="text-warning">Si</em> o <em className="text-warning">No</em> a las siguientes preguntas:</p>
                    </div> 
                :   <div className="main_title_1">
                        <h1 className="text-warning">CUESTIONARIO CLIMA ORGANIZACIONAL</h1>
                        <h4>Elija una de las siguientes respuesta para cada pregunta.</h4>
                        <p className="text-left mb-1">1. TOTALMENTE DE ACUERDO</p>
                        <p className="text-left mb-1">2. PARCIALMENTE DE ACUERDO</p>
                        <p className="text-left mb-1">3. DESACUERDO</p>
                        <p className="text-left mb-1">4. NUNCA</p>
                    </div> 
            }
            
        </>
    )
}

export default InfoQuestions
