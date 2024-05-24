import UserGreeting from "./UserGreeting/UserGreeting";

function App(){
    return(
        <>
        <UserGreeting login = {true} username = 'Goku' /><br></br>
        <UserGreeting login = {false}/>
        </>
    );
}

export default App