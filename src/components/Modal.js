function Modal(props) {
    return (
        <div className='modal'>
            <p>Are you sure?</p>
            <button className='btn btn--alt' onClick={props.onConfirm}>Confirm?</button>
            <button className='btn' onClick={props.onCancel}>Cancel</button>
        </div>
    )
}

export default Modal;
