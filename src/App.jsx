

import { useState } from 'react';
import './App.css'
import { Button, Stack, TextField } from '@mui/material';




function App() {

  const [principle, setPrinciple] = useState(0)
  const [interest, setInterest] = useState(0)
  const [year, setYear] = useState(0)

  const[simpleInterest,setSimpleInterest]=useState(0)

 
  const [isInvalidPrinciple, setIsInvalidPrinciple] = useState(false)
  const [isInvalidInterest, setIsInvalidInterest] = useState(false)
  const [isInvalidYear, setIsInvalidYear] = useState(false)
  console.log(principle);


  const validateUserInput = (tag) => {
    const { name, value } = tag
    console.log(name, value);
    console.log(typeof value);

    // number ano enn  check cheyyan use akne
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if (!!value.match(/^[0-9]*.?[0-9]+$/)) {

      if (name == 'principle') {
        setPrinciple(value)
        setIsInvalidPrinciple(false)
      }
      else if (name == 'interest') {
        setInterest(value)
        setIsInvalidInterest(false)
      }
      else {
        setYear(value)
        setIsInvalidYear(false)

      }

    }
    else {
      if (name == 'principle') {
        setIsInvalidPrinciple(true)
      }
      else if (name == 'interest') {
        setIsInvalidInterest(true)
      }
      else {
        setIsInvalidYear(true)

      }

    }



  }
  const handleCalculate = (e) => {
    e.preventDefault()
    console.log('button clicked');
    if(principle && interest&& year){
      setSimpleInterest(principle*interest*year/100)

    }
    else{
      alert("Enter the Fields completely")
    }
  }
  const handleReset=()=>{
    setPrinciple(0)
    setInterest(0)
    setYear(0)
    setSimpleInterest(0)
    setIsInvalidPrinciple(false)
    setIsInvalidInterest(false)
    setIsInvalidYear(false)
    
  }

  return (
    <>
      <div className="bg-dark d-flex align-item-center justify-content-center p-3" style={{ minHeight: "100vh", width: "100%" }}>
        <div className="bg-light rounded p-5 " style={{ width: "550px" }}>
          <h2>Simple Interest Calculator</h2>
          <p>Calculate your simple interest easily</p>
          <div className="d-flex align-items-center justify-content-center p-3 bg-warning rounded text-light flex-column" style={{ height: "120px" }}>
            <h1>₹&nbsp;{simpleInterest}</h1>
            <h5>Total Simple Interest</h5>


          </div>
          <form className='mt-5'>
            <div className='mb-3'>
              <TextField name='principle' onChange={e => validateUserInput(e.target)} value={principle||""} className='w-100' id="outlined-basic" label="₹Principle Amount" variant="outlined" />
            </div>
            {
              isInvalidPrinciple &&
              <p className='text-danger'>Invalid Principle Amount</p>
            }
            <div className='mb-3'>
              <TextField name='interest' onChange={e => validateUserInput(e.target)} value={interest||""} className='w-100' id="outlined-basic" label="Rate of Interest(p.a)%" variant="outlined" />
            </div>
            {
              isInvalidInterest &&
              <p className='text-danger'>Invalid Interest</p>
            }
            <div className='mb-3'>
              <TextField name='year' onChange={e => validateUserInput(e.target)}  value={year||""} className='w-100' id="outlined-basic" label="Time Period(Yr)" variant="outlined" />
            </div>
            {
              isInvalidYear &&
              <p className='text-danger'>Invalid Year</p>
            }
            <Stack direction="row" spacing={2}>
              <Button type='submit' disabled={isInvalidPrinciple||isInvalidInterest||isInvalidYear} onClick={handleCalculate} variant="contained" style={{ backgroundColor: "black", width: "50%", height: "50px" }}>Calculate</Button>
              <Button onClick={handleReset} variant="outlined" style={{ width: "50%", height: "50px" }}>Reset</Button>
            </Stack>
          </form>
        </div>
      </div>

    </>
  )
}

export default App
// metirial ui
