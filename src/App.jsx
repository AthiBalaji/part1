import { useState } from 'react'

const Display = (prop) =>{

  const {name, count, stat} = prop;

  if(stat){
    return(
      <div>
        {name}: {count}
      </div>
    )
  }else{
    return null
  }

}

const Button = (prop) => {
  const {text,updateStats} = prop;
  return(
    <div>
      <button onClick ={updateStats}>{text}</button>
    </div>
  )

}

const Stats = (prop) => {
  const {total, good, bad, stats} = prop;
  if(stats){
    let positive = good/total;
    console.log("good and bad and total ", good, bad, total)
    let average = (good-bad)/total;
    console.log("good and bad and total and average ", good, bad, total, average)
    return(
      <div>
        <div>positive: {positive}</div>
        <div>average : {average}</div>

      </div>
    )

  }else{
    return null;
  }
}
 
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [stats, showStats] = useState(0);
  let updateGood = () =>{
    setGood(good+1);
    showStats(stats + 1);
  }
  let updateBad = () =>{
    setBad(bad+1);
    showStats(stats + 1);
  }
  let updateNeutral = () =>{
    setNeutral(neutral+1);
    showStats(stats + 1);
  }



  return (
    <div>
      <h1>Give feedback</h1>


    <Button text = "Good" statefun = {updateGood} updateStats = {updateGood}></Button>
    <Button text = "Bad" statefun = {updateBad}  updateStats = {updateBad}></Button>
    <Button text = "Neutral" statefun = {updateNeutral}  updateStats = {updateNeutral}></Button>

    <Display name = "Good" count = {good} stat = {stats} />
    <Display name = "Neutral" count = {neutral} stat = {stats} />
    <Display name = "Bad" count = {bad} stat = {stats}/>
    <Stats total = {good+neutral+bad} good = {good} bad = {bad} stats= {stats}/>

    </div>


  )
}

export default App