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
    const url = "http://34.238.123.231:3080"

    useEffect(() => {
        api.get(url + `/formulary/first`).then(resp => {
            if(!resp.err) {
                setDataform(resp.model.questions)
                setNumberQuestions(resp.model.questions.length)
            } else {
                setDataform(null)
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getDataResult = (data) => {
        const existItem = dataResult.findIndex((el) => el.question === data.question) !== -1;
        const itemIndex = dataResult.findIndex((el) => el.question === data.question);

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