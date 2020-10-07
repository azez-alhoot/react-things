import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      thingList:[
          {
            "id":1,
            "thingName":"BMW",
            "type":"Car"
          },
          {
            "id":2,
            "thingName":"iphone 8",
            "type":"phone"
          }
    ]
      
    }


  }
  render(){
    return(
      <>
        <div className = "App">
          <Header thingscount ={this.state.thingList.length}/>
          <ThingsRender things={this.state.thingList} thingCreated={thing => this.addNewThing(thing)}/>
          <Footer/>
        </div>

      </>
    )
  }

  addNewThing(thing){
    let allThings = this.state.thingList;
    allThings.push({id:this.state.thingList.length+1, thingName:thing.name, type:thing.type})
    this.setState({
      thingList: allThings
    })
  }
}

class ThingList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name:"",
      type:""
    }
    this.handelChanges = this.handelChanges.bind(this)
    this.handelSubmit = this.handelSubmit.bind(this)
  }

  render(){
    return(<>
      <form onSubmit={this.handelSubmit}>
        <label>Thing Name :
          <input type= "text" id="thingName" onChange = {this.handelChanges}></input>
        </label><br/>
        <label>Thing Type:
        <input type= "text" id="thingType" onChange = {this.handelChanges}></input>
        </label>
        <br/>
        <input type="submit"></input>
      </form>
    </>
    )
  }

  handelChanges(event){
    let newName = document.getElementById('thingName').value;
    let newType = document.getElementById('thingType').value;
    // let newType = event.target.value;
    // event.target.getAttribute("id")
    console.log(newName)
    console.log(newType)
    this.setState({
      name:newName,
      type:newType
    })
  }

  handelSubmit(event){
    event.preventDefault();
    this.props.onThingCreate(this.state)
    // alert(this.state.name)
  }

}


function ThingsRender(props){
  return(
    <>
      <ul>
        {props.things.map(thing => <ThingItem item={thing} key ={thing.id}/>)}
      </ul>
      <ThingList onThingCreate={(data)=>props.thingCreated(data)}/>
    </>
  )
}


function ThingItem(props){
return <li>Name:{props.item.thingName} - Type: {props.item.type}</li> 
}

function Header(props){
  return(
  <>
    <h1>Store Of Things</h1>
  <h2>All Things Number: {props.thingscount}</h2>
  </>
  )
}

function Footer(props){
  return(
    <p>Store Of Things @ Aziz Alhoot</p>
  )
}

export default App;
