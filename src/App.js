
import { useState } from 'react';
import './App.css';

function App() {
  const getRandomInt = () => {
    return Math.floor(Math.random() * 9)+1;
  }
  const [input, setInput] = useState('');
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(getRandomInt);
  const [report, setReport] = useState('');
  const OnBtnClick = () => {
    console.log('input',input)
    console.log('count',count)
    console.log('result',result)
    if (isNaN(input)) {
      setReport('không đúng định dạng số mời nhập lại')
    }
    else if (input < 1 || input > 10) {
      setReport('không nằm trong khoảng dự đoán mời nhập lại')
    }
    else if(input != result && count < 3)
    {
      setReport(`kết quả dự đoán ${input} chưa đúng`)
      setCount(count+1)
      setInput('')
    }
    else if(input != result && count == 3) {
      setReport(`đã hết số lần dự doán, kết quả lần dự đoán này là ${result}`)
      setCount(0)
      setInput('')
      setResult(getRandomInt)
    }
    else if( input == result)
    {
      setReport(`chúc mừng bạn đã dự đoán chính xác, kết quả lần dự đoán này là ${result}`)
      setCount(0)
      setInput('')
      setResult(getRandomInt)
    }
  }
  return (
    <div className="App">
      <div>du doan ket qua so so trong khoang 1 den 10</div>
      <div>
        <input type="text" value={input} onChange={event => {setReport(''); setInput(event.target.value); }}></input>
      </div>

      <button onClick={OnBtnClick}>du doan</button>
      <div>{report}</div>
    </div>
  );
}

export default App;
