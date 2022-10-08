import './App.css';
import FormMainContent from './UserForm/FormMainContent/FormMainContent';
import FormSteps from './UserForm/FormSteps';


function App() {
  return (
    <>
      <div className='layout'>
        <div className='logo'>Eden</div>
        <FormSteps />
        <FormMainContent />
      </div>
    </>
  );
}

export default App;
