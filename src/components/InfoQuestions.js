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
                        <p className="mt-3">Por favor conteste <em className="text-warning">Si</em> o <em className="text-warning">No</em> a las siguientes preguntas:</p>
                    </div> 
                :   <div className="main_title_1">
                        <h1 className="text-warning">CUESTIONARIO CLIMA ORGANIZACIONAL</h1>
                        <h4>Marca sólo una opción indicando tu grado de acuerdo o desacuerdo con las siguientes afirmaciones, siendo 1 totalmente deacuerdo y 10 totlamente en desacuerdo.</h4>
                    </div> 
            }
            
        </>
    )
}

export default InfoQuestions
