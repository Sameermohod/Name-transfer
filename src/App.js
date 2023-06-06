
import 'bulma/css/bulma.min.css';
import { useState } from 'react';

const App = () => {
  const names = ["Sameer",
   "Ajay",
    "Ritik", 
    "Sahil",
    "Swapnil"];
  const [firstBoxNames, setFirstBoxNames] = useState([...names]);
  const [secondBoxNames, setSecondBoxNames] = useState([]);
  const [firstButtonDisabled, setFirstButtonDisabled] = useState(false);
  const [SecondButtonDisabled, setSecondButtonDisabled] = useState(true);

  const handleFirstButtonClick = () => {
    if(firstBoxNames.length>0){
      setSecondBoxNames([...secondBoxNames, firstBoxNames[0]]);
      firstBoxNames.shift();
      setFirstBoxNames([...firstBoxNames]);
      setSecondButtonDisabled(false);
    } else {
        setFirstButtonDisabled(true);
    }
  }
  const handleSecondButtonClick = () => {
    if(secondBoxNames.length>0){
      setFirstBoxNames([...firstBoxNames, secondBoxNames[0]]);
      secondBoxNames.shift();
      setSecondBoxNames([...secondBoxNames]);
      setFirstButtonDisabled(false);
    } else {
        setSecondButtonDisabled(true);
    }
  }

  return (
    <div className=' container row mt-5'>
    <div>hvgbjhgbj</div>
      <div className='border col-4 h-100 text-center'>
          {firstBoxNames.map((name, index) => <div className='border' key={index}>{name}</div>)}
      </div>
        <div className='col-2'>
        <button className='mt-5 btn btn-primary' disabled={firstButtonDisabled} onClick={handleFirstButtonClick}>Transfer to Second Box</button>
        </div>
        <div className='col-2'>
        <button className='mt-5 btn btn-primary' disabled={SecondButtonDisabled} onClick={handleSecondButtonClick}>Transfer first box</button>
        </div>
      <div className='border col-4 h-100 text-center'>
      {secondBoxNames.map((name, index) => <div className='border' key={index}>{name}</div>)}      
      </div>
    </div>
  );
}

export default App;




