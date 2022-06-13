import './App.css';
import Button from './components/buttons';
import Form from './components/form';
import Users from './components/users';
import Parent from './components/parent';
import { NameProvider } from './provider';
import { UsersProvider } from './provider/UsersProvider';

function App() {
  const names = ['Thandar','Aye','Lin'];
  return (
    <div className="App">
      <UsersProvider>
        <NameProvider>
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
          {/* <Users /> */}
          <Parent/>
        </NameProvider>
      </UsersProvider>
    </div>
  );
}

export default App;
