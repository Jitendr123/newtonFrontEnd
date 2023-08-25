
import './App.css';
import IncreamentDecreamentComponent from './IncreamentDecreamentComponent/IncreamentDecrementComponent';

// React.createElement('div',{},"sdfvgnbhjkkjhg");
function App(props) {
  console.log("props is", props)
  const { name,company}=props;
  return (
    <div>
      hello my name is {name}  and i am working in a {company}<br></br>
      <IncreamentDecreamentComponent/>
    </div>
  );
}

export default App;
