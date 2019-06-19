import React from 'react';
import Button from '../components/Button';
import '../style/saloon.css'
import menu from '../menu.js';

class Saloon extends React.Component{
  constructor(props){
    super(props);
    this.state={
      buy:[]
    }
  }

  cliqueDaCompra = (item)=> {
    const itemIndex = this.state.buy.findIndex((menuItem)=>{
      return menuItem.name === item.name;
    })

    if(itemIndex < 0){
      const newItem = {
        ...item,
        amount: 1
      }

      this.setState({
        buy: this.state.buy.concat(newItem)
      })
    } else {
      let newBuy = this.state.buy
      newBuy[itemIndex].amount += 1;
      this.setState({
        buy: newBuy
      });
    }    
}

  
  delete = (item) =>{
    const itemIndex = this.state.buy.findIndex((menuItem)=>{
      return menuItem.name === item.name;
    })

    let newBuy = this.state.buy;
    newBuy[itemIndex].amount -= 1;
    this.setState({
      buy: newBuy
    });
}

  render() {
    const totalValue = this.state.buy.reduce((acc, cur) => {
      return acc + cur.amount * cur.price
    },0)

    return (
      <main className="App">
        <p>Menu</p>
        <header className='menu-style'>
        {
          menu.mainMenu.map((menuItem, i) => 
          {
            return <Button text={menuItem.name} key={i} 
              onClick={()=> {this.cliqueDaCompra(menuItem)}}>
              </Button>
          })
        }
        </header >
        {
          this.state.buy.map((menuItem, i)=>{
            return <div key={i}>
              <p className='paragrath'> 
              {menuItem.name} -
              {menuItem.price * menuItem.amount} = 
              {menuItem.amount}</p>
              <button className='btn-delete' onClick={()=>this.delete(menuItem)}>Deletar</button>
            </div>
          })
        }
        <h1 className='footer'>Valor total: {totalValue}</h1>
      </main>
    );
  }
}

export default Saloon;