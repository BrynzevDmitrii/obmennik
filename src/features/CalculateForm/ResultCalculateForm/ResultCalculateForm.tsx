

export const ResultCalculateForm = ()=> {
return(
    <>
    <p>Предварительный расчет по текущему курсу</p>
    <div>
        <p>у меня есть</p>
        <p>{inputValue}</p>
    </div>

    <div>
        <p>мне нужно получить</p>
        <p>{outputValue}</p>
    </div>

    <div>
        <span>
            {curse}
        </span>
    </div>
    </>
)
}