import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state={
            categories: [
                {
                    key: 'all',
                    name: 'Все'
                },
                {
                    key: 'plov',
                    name: 'Плов'
                },
                {
                    key: 'firstfood',
                    name: 'Первые блюда'
                },
                {
                    key: 'secondfood',
                    name: 'Вторые блюда'
                },
                {
                    key: 'salaty',
                    name: 'Салаты'
                },
                {
                    key: 'zakuski',
                    name: 'Закуски'
                },
                {
                    key: 'napitki',
                    name: 'Напитки'
                },
                {
                    key: 'deserty',
                    name: 'Десерты'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el=>(
            <div key={el.key} onClick={()=>this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories
