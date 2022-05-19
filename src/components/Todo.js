/* 
- everything in the jsx block would be treated as either HTML or a plain text
- Dynamic expressions; we can tell react that something is not plain text but instead as a javascript expression and evaluate it { }
- We can have any js expression inside { }
- modalIsOpen ? <Modal /> : null  is similar to modalIsOpen && <Modal /> bcs true && true then 2nd value will be the one
- onClick={ ()=> {}}
- onClick={ function() {}}
- onClick={ fnName }
*/
import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    
    function deleteHandler() {
        setModalIsOpen(true);
    }
    
    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            { modalIsOpen && <Modal onConfirm={closeModalHandler} onCancel={closeModalHandler} /> }
            { modalIsOpen && <Backdrop onCancel={closeModalHandler} /> }
        </div>
    );
}

export default Todo;
