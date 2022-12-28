import React,{useState} from "react" //тут тоже нужен реакт

const Counter = (props) => {//все реакт компоненты называются с большой буквы
    // const [tags, setTags] = useState(['tag1','tag2','tag3'])//масив с отслеживанием изменений и функцией эттих изменений
    // console.log(props)
    const {value} = props

    // const x = <h1>empti</h1>//можем использовать jsx выражения как переменные
    const formatValue = () => {
        return value === 0 ?  'empti' : value
    }
    const getBageClasses = () => {
        let classes = "badge m-2 "
        classes+=value === 0? "text-bg-warning" : "text-bg-primary"
        return classes
    }

    // const handleTagChange = (id) => {
    //     // setTags(["tag4","tag5"])
    //     setTags((prevState) => prevState.filter((tag)=> tag !== id ))
    //     console.log(id)
    // }

    // const renderTags = () => {
    //     if (tags.length === 0) {
    //         return "no tags"
    //     }
    //     return tags.map((tag) => (
    //         <li 
    //             className="btn btn-primary btn-sm m-2" 
    //             onClick={()=>handleTagChange(tag)} 
    //             key={tag}
    //         >
    //             {tag}
    //         </li>))
    // }

    // if (tags.length !== 0) {
    //     return <ul>{renderTags()}</ul>
    // }
    return (//круглые скобки нужно чтобы js видел что мы возвращаем нижние строчуки, без них js думал бы что мы ничего не возвращаем и не смотрел бы вниз
        <div>
            <span>{props.name}</span>
            <span className={getBageClasses()} >{formatValue()}</span>
            <button 
                className="btn btn-primary btn-sm m-2" 
                onClick={()=>props.onIncrement(props.id)}>
                +
            </button>
            <button 
                className="btn btn-primary btn-sm m-2" 
                onClick={()=>props.onDecrement(props.id)}>
                -
            </button>
            <button className= "btn btn-danger btn-sm m-2" onClick={()=>props.onDelete(props.id)}>Delete</button>
        </div>
        //можно не писать реакт фрагмент и оставить просто пустые обертки
        //с помощью react.fragment мы возвращаем 2 элемента без оберточного дива
        //чтобы вернуть 2 или больше элемента их нужно обернуть в div
    ) // возвращаем выражение jsx
}

export default Counter