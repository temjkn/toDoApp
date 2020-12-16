import React from 'react';
import img from '../../img/unnamed.png';

const ListGroupHook = ({events,removeEvent,loading}) => {
    return (<>
        {loading
            ? <h1>LOADING, WAIT</h1>
            : <div className = "cards-wrap">
                {
                    events.length
                        ? events.map( item => (<div className="card" key={item.id}>
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
                            )
                        )
                    : <h2> No events</h2>
                }
            </div>
        }
        </>
    )
};

export default ListGroupHook;