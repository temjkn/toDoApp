import React, { useContext, useEffect, useState } from 'react';
import { DragDropContext,Draggable,Droppable } from 'react-beautiful-dnd';
import { TodoContext } from '../hookReduser/TodoContext';
import img from '../img/unnamed.png';

const DrapDropWrap = () => {

    const {fetchEvents,events} = useContext(TodoContext);

    useEffect( ()=> {
        fetchEvents()
    }, [])  // eslint-disable-line react-hooks/exhaustive-deps

    const [characters, updateCharacters] = useState(events);

    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const items = Array.from(characters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateCharacters(items);

    }

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
                {(provided) => (
                    // <DrapDrop className = "characters" events={events} {...provided.droppableProps} ref={provided.innerRef}/>
                    <div className = "cards-wrap characters" {...provided.droppableProps} ref={provided.innerRef}>
                        { characters.map( (item,index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided) => (
                                    <div className="card" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <img src={item.file ? item.file : img} className="card-img-top" alt={item.file ? item.file : img}/>
                                        <div className="card-body">
                                            <p className="card-text">{item.text}</p>
                                        </div>
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Draggable>)
                            )
                        }
                        {provided.placeholder}
                </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default DrapDropWrap;

// const DrapDrop = ({events}) => {
//     return (
//         <div className = "cards-wrap" >
//                 { events.map( (item,index) => (
//                     <Draggable key={item.id} draggableId={item.id} index={index}>
//                         {(provided) => (
//                             <div className="card" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
//                                 <img src={item.file ? item.file : img} className="card-img-top" alt={item.file ? item.file : img}/>
//                                 <div className="card-body">
//                                     <p className="card-text">{item.text}</p>
//                                 </div>
//                             </div>
//                         )}
//                     </Draggable>)
//                     )
//                 }
//         </div>
//     )
// };
