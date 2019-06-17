import React from 'react';
import Button from '../components/Button';
import '../style/saloon.css'


const menu =[
  {
    produto: 'vegetariano',
    preco: 30,
  },
  {
    produto: 'coca',
    preco: 5
  },
  {
    produto: 'batata',
    preco: 25
  },
  {
    produto: 'sorvete',
    preco: 5
  },
  {
    produto: 'mousse',
    preco: 8
  },
  {
    produto: 'bolo',
    preco: 5
  }
]

class Saloon extends React.Component{
  constructor(props){
    super(props);
    this.state={
      comprar:[]
    }
  }

  cliqueDaCompra = (item)=> {
    const itemIndex = this.state.comprar.findIndex((menu)=>{
      return menu.produto === item.produto;
    })

    if(itemIndex < 0){
      const newItem = {
        ...item,
        quantidade: 1
      }

      this.setState({
        comprar: this.state.comprar.concat(newItem)
      })
    } else {
      let newComprar = this.state.comprar
      newComprar[itemIndex].quantidade += 1;
      this.setState({
        comprar: newComprar
      });
    }    
  }

  
//   delete = (item) =>{
//     const itemIndex = this.state.comprar.findIndex((menu)=>{
//       return menu.produto === item.produto;
//     })

//     let newComprar = this.state.comprar
//       newComprar[itemIndex].quantidade -= 1;
//       this.setState({
//         comprar: newComprar
//       });
// }

  render() {
    const totalValue = this.state.comprar.reduce((acc, cur) => {
      return acc + cur.quantidade * cur.preco
    },0)

    console.log(totalValue)
    return (

      <div className="App">
        <p>Menu</p>
        <div className='menu'>
        {
          menu.map((menu, i) => 
          {
            return <Button text={menu.produto} key={i} 
              onClick={()=> {this.cliqueDaCompra(menu)}}>
              </Button>
          })
        }
        </div >
        {
          this.state.comprar.map((menu, i)=>{
            return <div>
              <p className='paragrath' key={i}> {menu.produto} -
              {menu.preco * menu.quantidade} = 
              {menu.quantidade}</p>
            
            </div>
          })
        }
        <h1 className='footer'>Valor total: {totalValue}</h1>
      </div>

    );
  }
}

export default Saloon;