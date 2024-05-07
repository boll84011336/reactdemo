import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const AddInput = function (props) {
  const [value, setValue] = useState("");
  const { f, setf } = props;
  return (
    <>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <input type="button" value="新增菜單" onClick={() => setf([...f, value])} />
    </>
  )
}

const Restaurant = function () {
  const [foods, setFoods] = useState(["沙拉", "漢堡"]);
  return (
    <>
      <h1>貓貓西餐廳</h1>
      <h2>菜單</h2>
      <AddInput f={foods} setf={setFoods} />
      <ul>
        {
          foods.map((food, index) => {
            return <li key={index}>{food}</li>
          })
        }

      </ul>
    </>
  )
}
const CafeShop = function () {
  const [foods, setFoods] = useState(["卡布奇諾", "紅茶"])
  return (
    <>
      <h1>溫馨狗咖啡</h1>
      <h2>菜單</h2>
      <AddInput f={foods} setf={setFoods} />
      <ul>
        {
          foods.map((food, i) => {
            return <li key={i}>{food}</li>
          })

        }
      </ul>
    </>
  )
}

function App() {
  return (
    <>
      <Restaurant />
      <CafeShop />
    </>
  )
}

export default App
