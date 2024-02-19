import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { buyTicket } from './redux/action';
import { profileDetails } from './redux/profile/action';

function App() {

  // const {totalTickets,filledTickets,blockTickets,unfilledTickets}=useSelector((state)=>state)
  const dispatch=useDispatch()

  const ReduxStore=useSelector(state=>state)
  console.log(ReduxStore)

  const buyTicketFunction=()=>{
    dispatch(buyTicket())

  }

  const profileChange=()=>{

    dispatch(profileDetails({
      name:"Ganesh",
      salary:"1000"
    }))
  }

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <h5>Total Tickets : {totalTickets}</h5>
    //     <h5>Filled Tickets : {filledTickets}</h5>
    //     <h5>Blocked Tickets : {blockTickets}</h5>
    //     <h5>Unfilled Tickets : {unfilledTickets}</h5>
    //     <button onClick={buyTicketFunction}>Buy Ticket</button>
    //   </header>
    // </div>
    <>
    <button onClick={profileChange}> Fill Details</button>
    <h2>Profile {ReduxStore.profile.name}</h2>
    </>
  );
}

export default App;
