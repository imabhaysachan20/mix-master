import React from 'react'
import Wrapper from "../assets/wrappers/CocktailList"
import CocktailCard from './CocktailCard';
const CocktailList = ({drinks,searchTerm}) => {
    if(!drinks) {
        return <h4 style={{textAlign:'center'}}>No drink</h4>;
    }
    const formattedDrinks = drinks.map((item)=>{
        const {idDrink,strDrink,strDrinkThumb,strAlcoholic,strGlass} = item;
        return {id:idDrink, name:strDrink, image:strDrinkThumb, info:strAlcoholic,glass:strGlass}
    })
  return (
    <Wrapper>
      {formattedDrinks.map((item)=>{
        const {id,name,image,info,glass} = item;

        return <CocktailCard key={id} id={id} name={name} image={image} info = {info} glass = {glass}/>
      })}
    </Wrapper>
  )
}

export default CocktailList
