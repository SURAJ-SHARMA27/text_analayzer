 
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
function App() {
  return (
 <>
 
{/* <Navbar title="options" link="click for more"/>*/}
<Navbar/>
<div className="container my-3">
<TextForm heading="ENTER THE TEXT TO ANALYZE"/>
</div>

 </>
  );
}

export default App;
