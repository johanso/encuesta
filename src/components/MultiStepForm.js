import React, {useContext} from 'react'
// context
import { QuestionContext } from './../context/QuestionsContext';
import { UserContext } from './../context/UserContext';
// Components
import Loader from './Loader';
import QuestionScale from './QuestionScale';
import QuestionYesNo from './QuestionYesNo';
import InfoQuestions from './InfoQuestions';
import GrattingUser from './GrattingUser';
// Icon
import { MdKeyboardArrowRight, MdSend } from "react-icons/md";

const MultiStepForm = () => {
    const {
        dataForm,
        dataResult,
        handleNextbtn, 
        sendDataServer,
        currentPage,
        currentItems,
        numberQuestions,
        pages,
        isChecked,
        ViewGretting
    } = useContext(QuestionContext)
    const {dataUser} = useContext(UserContext)

    const handleSendData = () => {
        const dataToSend = {
            user_id: dataUser._id,
            formulary: dataResult
        }
        sendDataServer(dataToSend)
    }

    return (
        <>
        {
            !ViewGretting ?
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
                                {
                                    currentPage !== pages[pages.length - 1] &&
                                    <button type="button" 
                                        onClick={handleNextbtn}
                                        disabled={!isChecked}
                                        name="forward" 
                                        className="forward">
                                        Siguiente <MdKeyboardArrowRight />
                                    </button>
                                }
                                {
                                    currentPage === numberQuestions &&
                                    <button type="button" 
                                        onClick={handleSendData}
                                        disabled={!isChecked}
                                        className="forward submit">
                                        Enviar <MdSend />
                                    </button>
                                }
                            </div>

                        </form>
                    </div>
                </div> 
            </div> :
            <GrattingUser />
        }
        </>
    )
}

export default MultiStepForm
