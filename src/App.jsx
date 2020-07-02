import React from 'react';
import List from './components/List';
import Input from './components/Input';
import  './components/App.css';
import EShop from './components/EShop.jsx';
import { Switch, Route, Router, Link, BrowserRouter } from 'react-router-dom';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: Date.now(),
          text: "",
        }
      ]
    }
  }

  newListItems = (newElement) => { // strelo4naya fcyia beret contekst sverhy
    this.setState({
      items: [
        ...this.state.items,  //vozmet predidyshiy state zna4enie {SPREAD OPERATOR}
        {
          id: Date.now(),
          text: newElement
        }
      ]
    });
  }

  deletingItem = (id) => {
    this.setState({
      items: this.state.items.filter(item => {
        return item.id !== id;
      })
    })
  }

  

  render() {
    return (
      
      
      <div className="container">

        <div>TO DO LIST</div>
        
        <List
          class="box_list"
          items={this.state.items}
          deletingItem={this.deletingItem} />

        <Input 
          class="box_input"
          newListItems={this.newListItems} />
        
                {/* popadaet v props */}


       <a href="https://gshn.ru/Eshop.html">EShop</a>

{/* 
        <nav>
        <BrowserRouter>
           
            <div>
              <Link to="/Eshop">EShop</Link>
            
              
              
            <Switch>
              <Route exact path="/EShop">
                 <EShop />
              </Route>
            </Switch>
            </div>

          </BrowserRouter>

        
        </nav>    */}
               
        

      </div>
      
    )
  }
}