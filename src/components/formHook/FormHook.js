import React, { useState } from 'react';

const FormHook = (props) => {

    const [value, setValue] = useState('');
    const [file, setFile] = useState('');

    const onChangeFile = e => {
        const file = e.target.files[0];

        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = function() {
            setFile(reader.result)
        };

        reader.onerror = function() {
            console.log(reader.error);
        };

    }

    const onSubmit = e => {
        e.preventDefault();
        if(value || file){
            props.addEvent(value, file)
            setValue('')
            setFile('')
        }
    }

    return (
        <form  className="mb-3" onSubmit = {onSubmit}>
            <div  className="mb-3">
                <label className="form-label">Enter task</label>
                <input
                    type="text"
                    className="form-control form-control-color"
                    value = {value}
                    onChange = {e => setValue(e.target.value)}
                />
            </div>
            <div className="mb-3 width">
                <label className="form-label">Choose image</label>
                <input 
                    className="form-control form-control-color"
                    type={"file"}
                    onChange = {onChangeFile}
                />
            </div>
            <button
                type="submit"
                className="btn btn-danger"
                // onClick ={ () => onSubmit(value) }
            >Submit</button>
        </form>
    );
};

export default FormHook;