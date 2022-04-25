import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import { HomepageBody } from "./components/homepage/body/body.jsx";
import {Header} from "./components/homepage/header/header.jsx"
import axios from 'axios'   //Importando Axios
import { Component } from "react";
import { FormikFormDemo } from "./components/form/form.jsx";

const api = axios.create({      // Consumindo a API
  baseURL: `http://localhost:4000/schedules`
})


class App extends Component {
  state = {
    schedules: []
  }
  
  constructor() {
    super();
    this.getSchedule()
  }

  getSchedule = async () => {
    try {
    let data = await api.get('/').then(({data}) => data)
    this.setState({schedules: data})
  }catch (err){
    console.log(err)
  }
  }



  deleteSchedule = async(id) => {
    try{
      let data = await api.delete(`/${id}`)
      this.getSchedule();
      
    } catch(err){
      console.log(err)
    }
  }

  updateSchedule = async (id, val) => {
    try{
      let data = await api.put(`/${id}`, {name: val})
      this.getSchedule()

    } catch(err){
      console.log(err)
    }
  }

  render(){

    return ( 
      <div>
        <Header/>
        <FormikFormDemo/>
        <HomepageBody/>
      </div>
    );
  }
}

export default App;
