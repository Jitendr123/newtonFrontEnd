import logo from './logo.svg';
import './App.css';

// React.createElement('div',{},"sdfvgnbhjkkjhg");
function App(props) {
  console.log("props is", props)
  const { name,company}=props;
  return (
    <div>
      hello my name is ${name} and i am working in a ${company}
    </div>
  );
}

export default App;
