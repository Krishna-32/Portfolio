import Ref from "./Practice/Ref/Ref";

function App(){

    return(
        <>
        <Ref renderName = {(name, handleNameChange, nameRef) =>
            <>
                <input ref={nameRef} type="text" value={name} onChange={handleNameChange} />
                <p>Name : {name}</p>
                <button onClick={() => {nameRef.current.style.display = 'none'}}>Click</button>
            </>
            }/>
        </>
    );
}

export default App