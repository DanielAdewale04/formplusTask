const initialData = {
    data: [],
    count: 0,
}

const CatData = (state = initialData.data, action) => {
 switch(action.type){
     case "FetchData":
         return {
             ...state,
             data: action.payload.data,
         };
    default:
        return state;
 }
}

export default CatData;