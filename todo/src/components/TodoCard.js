import React from 'react'


function TodoCard(props) {

    return(
        <div onClick={() => props.toggle(props.item.id)}>
            <p className={props.item.completed? "complete" : ""}>
                {props.item.item}
            </p>
        </div>
    )
}
export default TodoCard