import ApiTemplate from "./pages/Nav/api_explore/api_template";
import Nav from "./pages/Nav/nav";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
    <ToastContainer />
      <Nav/>
      <ApiTemplate/>
    </div>
  );
}

export default App;
