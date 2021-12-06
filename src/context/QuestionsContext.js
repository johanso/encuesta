import { createContext, useState, useEffect } from "react";
import { helpHttp } from './../helpers/helpHttp';

export const QuestionContext = createContext();

const QuestionProvider = ({children}) => {

    const [dataForm, setDataform] = useState([]);
    const [dataResult, setDataResult] = useState([]);
    const [numberQuestions, setNumberQuestions] = useState(0);
    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(1);
    const [pageNumberLimit, setpageNumberLimit] = useState(1);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(1);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

    const pages = [];
    for (let i = 1; i <= Math.ceil(dataForm.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = dataForm.slice(indexOfFirstItem, indexOfLastItem);


    const api = helpHttp()
    const url = "http://localhost:5000/dataForm"

    useEffect(() => {
        api.get(url).then(resp => {
            if(!resp.err) {
                setDataform(resp[0].model.questions)
                setNumberQuestions(resp[0].model.questions.length)
            } else {
                setDataform(null)
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const getDataResult = (data) => {
        setDataResult(data)
    }

    const handleNextbtn = () => {
        setcurrentPage(currentPage + 1);
        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
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
        setitemsPerPage,
        setpageNumberLimit,
        dataResult,
        getDataResult,
        pages,
        handleNextbtn,
        handlePrevbtn,
    }

    return  <QuestionContext.Provider value={data}>
                {children}
            </QuestionContext.Provider>
}

export default QuestionProvider;