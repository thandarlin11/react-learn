import './App.css';
import Button from './components/buttons';
import Form from './components/form';
import Users from './components/users';
function App() {
  const names = ['Thandar','Aye','Lin'];
  return (
    <div className="App">
      <h1>Test</h1>
      {/*{
        names.map((name,index)=>(
          <h3 key = {index}> Hello, my name is {name}</h3>
        ))
      }
      <Button text = 'View More' background = 'blue' margin = '10px'/>
      <Button text = 'Filter' background = 'red' margin = '10px'/>
      <Button text = 'Submit' background = 'green' margin = '10px'/>
      <Form/>
    */}
    <Users/>
    </div>
  );
}

export default App;
