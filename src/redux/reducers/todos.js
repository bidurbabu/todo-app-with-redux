import { ADD_TODO, TOGGLE_TODO } from "../actions/actionTypes";

const initialState = {
  allIds: [1, 2, 3, 4],
  byIds: {
    1: { content: "task 1", weight: 10, priority: 40, completed: false },
    2: { content: "task 2", weight: 20, priority: 30, completed: false },
    3: { content: "task 3", weight: 30, priority: 20, completed: false },
    4: { content: "task 4", weight: 40, priority: 10, completed: false }
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content, weight, priority } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            weight,
            priority,
            completed: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    default:
      return state;
  }
}
