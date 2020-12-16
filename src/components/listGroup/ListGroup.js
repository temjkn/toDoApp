import React from 'react';

const ListGroup = (props) => {
    return (
        <ul className="list-group">
            {props.list.length !== 0
            ? props.list.map( (item) => {
                    return (
                        <li className="list-group-item" key = {item.id}>
                            <span>{item.text}</span>
                            <button 
                                type="button" 
                                className="btn btn-danger"
                                onClick = {() => props.removeEvent(item.id)}
                            >&times;</button>
                        </li>
                    )
                }).reverse()
            : <li className="list-group-item">
                <span>no tasks</span>
            </li>
        }
        </ul>
    );
};

export default ListGroup;