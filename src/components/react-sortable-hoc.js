import React, {useContext, useEffect, useState} from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { TodoContext } from '../hookReduser/TodoContext';
import img from '../img/unnamed.png';

const SortableItem = SortableElement(({item,removeEvent}) => (
    <div className="card">
        <button 
            type="button" 
            className="btn btn-outline-danger btn-sm"
            onClick = {()=>removeEvent(item.id)}
        >&times;
        </button>
        <img src={item.file ? item.file : img} className="card-img-top" alt={item.file ? item.file : img}/>
        <div className="card-body">
            <p className="card-text">{item.text}</p>
        </div>
    </div>
));

const SortableList = SortableContainer(({items}) => {
    return (
        <div className='cards-wrap'>
            {items.map((item, index) => (
                <SortableItem key={item.id} index={index} item={item} />
            ))}
        </div>
    );
});


const SortableComponent = () => {
    const {fetchEvents,events,changeDataIndex,removeEvent,loading} = useContext(TodoContext);
    const [state, setState] = useState(events);

    useEffect( ()=> {
        fetchEvents();
    }, state !== 0); // eslint-disable-line react-hooks/exhaustive-deps

    const onSortEnd = ({oldIndex, newIndex}) => {
        setState(arrayMove(events, oldIndex, newIndex));
        changeDataIndex(state)
        // console.log(state)
    };

    return (
        <SortableList
        items={state}
        removeEvent = {removeEvent}
        loading = {loading}
        onSortEnd={onSortEnd}
        axis={"xy"}
        />
    );
};

export default SortableComponent;