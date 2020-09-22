const initialState = {
  additionalPrice: 0,
  car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}

export const carReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_FEATURE":
        console.log("ADD_FEATURE CALLED: ", "action: ", action,"state: ", state)
        const addFeaturesArray = [
          ...state.car.features,
          action.payload
        ]
        const addAdditionalPrice = state.additionalPrice + action.payload.price

        return{
          ...state,
          additionalPrice: addAdditionalPrice,
          car : {
            ...state.car,
            features: addFeaturesArray
          }
        }
      case "REMOVE_FEATURE":
        const removeFeaturesArray = state.car.features.filter(feature => feature.id !== action.payload.id)
        const subtractAdditionalPrice = state.additionalPrice - action.payload.price;
        console.log(state, action)
        return {
          ...state,
          additionalPrice: subtractAdditionalPrice,
          car: {
            ...state.car,
            features: removeFeaturesArray
          }
        }
      default:
          return state
    }
}