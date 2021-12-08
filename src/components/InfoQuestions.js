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
                        <p>Marca sólo una opción indicando tu grado de acuerdo o desacuerdo con las siguientes afirmaciones, siendo <em className="text-warning">1</em> totalmente de acuerdo y <em className="text-warning">10</em> totlamente en desacuerdo.</p>
                    </div> 
            }
            
        </>
    )
}

export default InfoQuestions
