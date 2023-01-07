import './InputArea.css'

const InputArea = ({ labeltext, type, placeholder }) => {
    return(
        <div className='input-area'>
            <label>{labeltext}</label>
            <input type={type} placeholder={placeholder}></input>
        </div>
    );
}

export default InputArea;