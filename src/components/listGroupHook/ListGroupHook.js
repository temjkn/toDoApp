import React, {useContext, useEffect, useState} from 'react';
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


// const ListGroupHook = ({events,changeDataIndex,removeEvent,loading,fetchEvents}) => {
const ListGroupHook = ({draggble,setDragglbe}) => {
    const {fetchEvents,events,removeEvent,loading,changeDataIndex} = useContext(TodoContext);

    console.log(events)

    // useEffect( ()=> {
    //     fetchEvents();
    //     // setState(events);
    //     // console.log(state)
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const onSortEnd = ({oldIndex, newIndex}) => {
        setDragglbe(arrayMove(draggble, oldIndex, newIndex));
        changeDataIndex(draggble);
        console.log('onSortEnd',draggble)
    };

    return (
        <>
            { loading
            ? <h1>LOADING, WAIT</h1>
            : <SortableList
                cards={draggble}
                removeEvent = {removeEvent}
                loading = {loading}
                onSortEnd={onSortEnd}
                axis={"xy"}
            />
            }
        </>
    );
};

export default ListGroupHook;

// const ListGroupHook = ({events,removeEvent,loading}) => {
//     return (<>
//         {loading
//             ? <h1>LOADING, WAIT</h1>
//             : <div className = "cards-wrap">
//                 {
//                     events.length
//                         ? events.map( item => (<div className="card" key={item.id}>
//                                 <button 
//                                     type="button" 
//                                     className="btn btn-outline-danger btn-sm"
//                                     onClick = {()=>removeEvent(item.id)}
//                                 >&times;
//                                 </button>
//                                 <img src={item.file ? item.file : img} className="card-img-top" alt={item.file ? item.file : img}/>
//                                 <div className="card-body">
//                                     <p className="card-text">{item.text}</p>
//                                 </div>
//                             </div>
//                             )
//                         )
//                     : <h2> No events</h2>
//                 }
//             </div>
//         }
//         </>
//     )
// };

// export default ListGroupHook;