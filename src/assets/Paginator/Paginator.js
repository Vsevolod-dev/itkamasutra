import React, {useState} from "react";
import classes from './Paginator.module.css'

const Paginator = ({countOfUsers, pageSize, currentPage, onPageChanged}) => {
    let pages = []
    let step = 100
    let [beginPages, setBeginPages] = useState(1)
    let [endPages, setEndPages] = useState(step)
    let countOfPages = Math.ceil(countOfUsers / pageSize)

    for (let i = beginPages; i <= endPages; ++i) {
        pages.push(i)
    }

    const currentPages = (fr, to) => {
        pages.length = 0
        for (let i = fr; i <= to; ++i) {
            pages.push(i)
        }
    }

    const nextPages = () => {
        pages.length = 0
        if (endPages <= countOfPages) {
            setBeginPages(beginPages += step)
            setEndPages(endPages += step)
        }
        currentPages(beginPages, endPages)
    }

    const prevPages = () => {
        pages.length = 0
        if (beginPages >= 11) {
            setBeginPages(beginPages -= step)
            setEndPages(endPages -= step)
        }
        currentPages(beginPages, endPages)
    }
    // debugger
    return <div>
        {pages[0] !== 1 && <button onClick={prevPages}>prev</button>}
        {
            pages.map(p => p <= countOfPages && <span
                    onClick={(e) => onPageChanged(p)}
                    className={currentPage === p && classes.selectedPage}
                >{p + " "}</span>
            )
        }
        {pages[step - 1] < countOfPages && <button onClick={nextPages}>next</button>}
    </div>
}

export default Paginator