import { createContext, useState, useEffect, useContext } from "react";
import { helpHttp } from './../helpers/helpHttp';
// Context
import { UserContext } from './../context/UserContext';

export const QuestionContext = createContext();

const QuestionProvider = ({children}) => {

    const{ REACT_APP_URL_SERVER } = process.env;

    const { dataUser } = useContext(UserContext)

    const [dataForm, setDataform] = useState([]);
    const [dataResult, setDataResult] = useState([]);
    const [numberQuestions, setNumberQuestions] = useState(0);
    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(1);
    const [pageNumberLimit, setpageNumberLimit] = useState(1);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(1);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
    const [isChecked, setIsChecked] = useState(false)
    const [ViewGretting, setViewGratting] = useState(false)

    const pages = [];
    for (let i = 1; i <= Math.ceil(dataForm.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = dataForm.slice(indexOfFirstItem, indexOfLastItem);

    const api = helpHttp()
    const url = REACT_APP_URL_SERVER

    useEffect(() => {
        getDataServer()
        setViewGratting(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dataUser])

    const getDataServer = () => {

        if( dataUser ) {
            api.get(`${url}/formulary/first`).then(resp => {
                if(!resp.error) {
                    setDataform(resp.model.questions)
                    setNumberQuestions(resp.model.questions.length)
                } else {
                    setDataform(null)
                }
            })
        }
    }

    const sendDataServer = (dataToSend) => {
        api.post(`${url}/employee-answers`, { body: dataToSend}).then(resp => {
            if(!resp.error) {
                setViewGratting(true)
            } else {
                console.log(resp.error)
            }
        })
    }

    const getDataResult = (data) => {
        const existItem = dataResult.findIndex((el) => el.name === data.name) !== -1;
        const itemIndex = dataResult.findIndex((el) => el.name === data.name);

        if(existItem) {
            const newState = [...dataResult]
            newState[itemIndex] = data
            setDataResult(newState)
        } else {
            setDataResult([...dataResult, data])
        }
    }

    const handleNextbtn = () => {
        setcurrentPage(currentPage + 1);
        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
        setIsChecked(false)
    };

    const handlePrevbtn = () => {
        setcurrentPage(currentPage - 1);
        if ((currentPage - 1) % pageNumberLimit === 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    const data = {
        dataForm,
        numberQuestions,
        currentItems,
        currentPage,
        dataResult,
        pages,
        isChecked, 
        ViewGretting,
        setitemsPerPage,
        setpageNumberLimit,
        getDataResult,
        handleNextbtn,
        handlePrevbtn,
        setIsChecked,
        sendDataServer
    }

    return  <QuestionContext.Provider value={data}>
                {children}
            </QuestionContext.Provider>
}

export default QuestionProvider;