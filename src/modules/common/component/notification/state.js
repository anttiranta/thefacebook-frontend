// App Imports
import {
  SET_MESSAGE,
} from './actions'

const notification = (state = null, action) => {
      switch (action.type) {
        case SET_MESSAGE:
          return [
            action.data.message, 
            action.data.type === undefined ? null : action.data.type
          ]
        default:  
          return state
      }
}
    
export default notification