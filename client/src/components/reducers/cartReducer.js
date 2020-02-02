import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        {
            "id": 592479,
            "title": "Kale and Quinoa Salad with Black Beans",
            "readyInMinutes": 50,
            "servings": 6,
            "image": "Kale-and-Quinoa-Salad-with-Black-Beans-592479.jpg",
            "imageUrls": [
                "Kale-and-Quinoa-Salad-with-Black-Beans-592479.jpg"
            ]
        },
        {
            "id": 547775,
            "title": "Creamy Avocado Pasta",
            "readyInMinutes": 15,
            "servings": 2,
            "image": "Creamy-Avocado-Pasta-547775.jpg",
            "imageUrls": [
                "Creamy-Avocado-Pasta-547775.jpg"
            ]
        },
        {
            "id": 818941,
            "title": "Avocado Toast with Eggs, Spinach, and Tomatoes",
            "readyInMinutes": 10,
            "servings": 1,
            "image": "avocado-toast-with-eggs-spinach-and-tomatoes-818941.jpg",
            "imageUrls": [
                "avocado-toast-with-eggs-spinach-and-tomatoes-818941.jpg"
            ]
        },
        {
            "id": 495111,
            "title": "Citrus Sesame Kale",
            "readyInMinutes": 15,
            "servings": 4,
            "image": "Citrus-Sesame-Kale-495111.jpg",
            "imageUrls": [
                "Citrus-Sesame-Kale-495111.jpg"
            ]
        },
        {
            "id": 689502,
            "title": "Melt In Your Mouth Kale Salad",
            "readyInMinutes": 10,
            "servings": 2,
            "image": "Melt-In-Your-Mouth-Kale-Salad-689502.jpg",
            "imageUrls": [
                "Melt-In-Your-Mouth-Kale-Salad-689502.jpg"
            ]
        },
        {
            "id": 837136,
            "title": "Kale Pineapple Smoothie",
            "readyInMinutes": 4,
            "servings": 1,
            "image": "kale-pineapple-smoothie-837136.jpg",
            "imageUrls": [
                "kale-pineapple-smoothie-837136.jpg"
            ]
        },
        {
            "id": 582897,
            "title": "Mexican Salad with Lime Dressing",
            "readyInMinutes": 15,
            "servings": 4,
            "image": "Mexican-Salad-with-Lime-Dressing-582897.jpg",
            "imageUrls": [
                "Mexican-Salad-with-Lime-Dressing-582897.jpg"
            ]
        },
        {
            "id": 777037,
            "title": "Weekly Meal Plan #17",
            "readyInMinutes": 15,
            "servings": 6,
            "image": "weekly-meal-plan-17-777037.jpg",
            "imageUrls": [
                "weekly-meal-plan-17-777037.jpg"
            ]
        },
        {
            "id": 801710,
            "title": "Matcha Green Tea and Pineapple Smoothie",
            "readyInMinutes": 10,
            "servings": 1,
            "image": "matcha-green-tea-and-pineapple-smoothie-801710.jpg",
            "imageUrls": [
                "matcha-green-tea-and-pineapple-smoothie-801710.jpg"
            ]
        },
        {
            "id": 812966,
            "title": "Low Carb Frosty",
            "readyInMinutes": 5,
            "servings": 1,
            "image": "low-carb-frosty-812966.jpg",
            "imageUrls": [
                "low-carb-frosty-812966.jpg"
            ]
        }
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6
          }
    }

    if(action.type=== 'SUB_SHIPPING'){
        return{
            ...state,
            total: state.total - 6
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer
