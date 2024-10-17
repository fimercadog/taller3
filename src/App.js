
import { useDispatch } from "react-redux";
import { setINFO } from "./reducers";
import iAX from "./ConfigAXIOS";
import {Button} from "react-bootstrap";

function App() {
  const disp = useDispatch();
  
  
  async function getToken() {

    
    try {

      const loginAndGetToken = await iAX.post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      });

      disp(setINFO(loginAndGetToken.data.token));

      
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return(
  <>
    <Button onClick={getToken}> 
      Obtener token
    </Button>
  </>
  );
}

export default App;
