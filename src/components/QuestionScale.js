import React, {useContext} from 'react'
// context
import { QuestionContext } from './../context/QuestionsContext';

const QuestionScale = ({data}) => {

    const {numberQuestions, currentPage, dataResult, getDataResult} = useContext(QuestionContext)

    const getValue = (option) => {
        getDataResult({
            question: option.name,
            answer: option.answer,
        })
        console.log(dataResult)
    }

    return (
        <div className="step mt-3 mt-sm-0">
            <h3 className="main_question mb-4">
                <strong>{currentPage} de {numberQuestions}</strong>
                {data.question}
            </h3>

            <div className="review_block_numbers">
                <ul className="clearfix">

                    {   data.options.map( option => (
                        <li key={option.value}>
                            <div className="container_numbers">
                                <input 
                                    type="radio" 
                                    id={`${option.name}_${option.value}`}  
                                    onChange={ () => getValue(option) }
                                    name={option.name} 
                                    className="required" 
                                    value={option.value} />
                                <label 
                                    className="radio very_bad" 
                                    htmlFor={`${option.name}_${option.value}`}>
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

export default QuestionScale
