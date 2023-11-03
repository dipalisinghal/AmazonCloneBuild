export const initialState ={
    basket: [],     // if basket: [milk, banana] then bread.length=2. so as items in cart
    user: null,
   // total:0,
};

//export const getBasketTotal = (basket) =>
//    basket.reduce((amount, item) => item.price + amount, 0);

export default function reducer(state, action)
{
    console.log(action);
    switch (action.type) {
        case 'Add_To_Basket':
            return {
              /*  basket: [state.basket, action.item]*/
                ...state,
                basket: [...state.basket, action.item],
               
            };
            break;
        case 'Remove_From_Basket':
            //clone the basket:
            let newBasket = [...state.basket];
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id===action.id
            );
            if (index >= 0) {
                //item exist in basket, remove it
                newBasket.splice(index, 1);
            }
            else {
                console.warn(`Can not remove product (id: ${action.id}) as it is no longer exists.`);
            }

            return {
                ...state,
                basket: newBasket,
                
            };
            break;
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            }
            break;
        //case 'Total_Basket':
        //    return {
        //        /*  basket: [state.basket, action.item]*/
        //        ...state,
        //        basket: [...state.basket, action.item],
        //        total: [...state.basket, action.item],
        //    };
        //    break;
        default:
            return  state ;
    }
}