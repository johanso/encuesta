import React, {useContext} from 'react'
// context
import { QuestionContext } from './../context/QuestionsContext';

const QuestionYesNo = ({data}) => {

    const {numberQuestions, currentPage, dataResult, getDataResult} = useContext(QuestionContext)

    const getValue = (option) => {

        getDataResult({
            ...dataResult,
            [option.name]: option.answer
        })

        console.log(dataResult)

    }

    return (
        <div className="step mt-3 mt-sm-0">
            <h3 className="main_question mb-4">
                <strong>{currentPage} de {numberQuestions}</strong>
                {data.question}
            </h3>
            <div className="review_block">
                <ul>
                    {   data.options.map( option => (
                        <li key={option.value}>
                            <div className="checkbox_radio_container">
                                <input 
                                    type="radio" 
                                    id={`${option.name}_${option.value}`} 
                                    onChange={ e => getValue(option) }
                                    name={option.name} 
                                    className="required" 
                                    value={option.value} />
                                <label 
                                    className="radio" 
                                    htmlFor={`${option.name}_${option.value}`}>
                                </label>
                                <label 
                                    htmlFor={`${option.name}_${option.value}`} 
                                    className="wrapper">
                                    {option.answer}
                                </label>
                            </div>
                        </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default QuestionYesNo
