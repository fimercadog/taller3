import axios from 'axios';






  async function createUser() {
    try {
      
      const getToken = await iAX.post("https://reqres.in/api/login", {
          email: "eve.holt@reqres.in",
          password: "cityslicka",
      });

      const token = getToken.data.token;
      localStorage.setItem('token', token); 

     
      const userResponse = await iAX.post("https://reqres.in/api/users", {
          name: "RAGAR",
          job: "FS-G262",
      });

      const userId = userResponse.data.id; 
      console.log("Usuario creado con ID:", userId);

     
      const fetchUserResponse = await iAX.get(`https://reqres.in/api/users/${userId}`);
      console.log("Usuario consultado:", fetchUserResponse.data);

  } catch (error) {
      console.error("Error:", error);
  }
}


export default createUser();

  