import React, {useContext, useEffect} from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import img from '../../img/unnamed.png';
import { TodoContext } from '../../hookReduser/TodoContext';

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

const SortableList = SortableContainer(({cards,removeEvent}) => {
    return (
        <div className='cards-wrap'>
            {cards.map((card, index) => (
                <SortableItem key={card.id} index={index} item={card} removeEvent={removeEvent}/>
            ))}
        </div>
    );
});

const ListGroupHook = () => {
    const {fetchEvents,events,removeEvent,loading,dragAndDrop} = useContext(TodoContext);

    useEffect( ()=> {
        fetchEvents();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onSortEnd = ({oldIndex, newIndex}) => {
        dragAndDrop(arrayMove(events, oldIndex, newIndex));
    };

    if(events.length <= 0){
        return <h1>NO EVENTS</h1>
    }else{
        return (
            <>
                { loading
                ? <h1>LOADING, WAIT</h1>
                : <SortableList
                    cards={events}
                    removeEvent = {removeEvent}
                    loading = {loading}
                    onSortEnd={onSortEnd}
                    axis={"xy"}
                />
                }
            </>
        );
    }
};

export default ListGroupHook;