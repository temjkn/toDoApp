import React from 'react';

const Form = (props) => {
    return (
        <form  className="mb-3">
            <div  className="mb-3">
                <label className="form-label">Enter task</label>
                <input
                    type="text"
                    className={"form-control " + (props.empty ? "error" : 0)}
                    value={props.value}
                    onChange = {e => {props.inputChange(e.target.value)}}
                />
            </div>
            <button
                type="submit"
                className="btn btn-primary"
                onClick={props.onSubmit}
            >Submit</button>
        </form>
    );
};

export default Form;