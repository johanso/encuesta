import React, {useContext} from 'react'
// context
import { QuestionContext } from './../context/QuestionsContext';
// Components
import Loader from './Loader';
import QuestionScale from './QuestionScale';
import QuestionYesNo from './QuestionYesNo';
import InfoQuestions from './InfoQuestions';

const MultiStepForm = () => {

    const {
        dataForm,
        handlePrevbtn, 
        handleNextbtn, 
        currentPage,
        currentItems,
        pages
    } = useContext(QuestionContext)

    return (
        <>
            <div className="row justify-content-between">
                <div className="col-xl-5 col-lg-6 d-flex align-items-center">
                    <InfoQuestions />
                </div>

                <div className="col-xl-7 col-lg-6 d-flex align-items-center">
                    <div id="wizard_container" className="mt-3 mt-lg-0 w-100">
                        <form id="wrapped" autoComplete="off">

                            <div id="middle-wizard mt-4 mt-lg-0">
                                {
                                    dataForm.length === 0 ?
                                    <Loader /> :
                                    <ul>
                                        {
                                            currentItems.map((data) => (
                                                data.option_type === "YesNo" 
                                                ? <QuestionYesNo 
                                                    key={data.id}
                                                    data={data} />
                                                : <QuestionScale 
                                                    key={data.id}
                                                    data={data}  />
                                            )
                                        )}
                                    </ul>
                                    
                                }
                            </div>

                            <div id="bottom-wizard" className="mb-3">
                                <button type="button" 
                                    onClick={handlePrevbtn} 
                                    disabled={currentPage === pages[0] ? true : false}
                                    name="backward" 
                                    className="backward ml-2">
                                    &laquo; Atras
                                </button>
                                <button type="button" 
                                    onClick={handleNextbtn}
                                    disabled={currentPage === pages[pages.length - 1] ? true : false}
                                    name="forward" 
                                    className="forward ml-2">
                                    Siguiente &raquo;
                                </button>
                            </div>

                        </form>
                    </div>
                </div> 
            </div>
        </>
    )
}

export default MultiStepForm
