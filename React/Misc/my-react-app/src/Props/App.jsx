import Student from './Props/Student'

function App(){
    return(
        <>
        <Student name = 'Gohan' age = {19} student = {true}/>
        <Student name = 'Trunks' age = {25} student = {true}/>
        <Student name = 'Bulma' age = {45} student = {false}/>
        <Student/>
        </>
    );
}

export default App