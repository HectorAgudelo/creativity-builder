interface TeamState {
    teamsName: string;
    playerCount: number;
    isWhitelisted: boolean;
}

type TeamAction =
    | { type: "SET_TEAM"; payload: string }
    | { type: "ADD_PLAYER"; payload: number }
    | { type: "TOGGLE_WHITELIST" }
    | { type: "RESET_TEAM" };


function teamReducer(state: TeamState, action: TeamAction) : TeamState {
    switch (action.type) {
        case 'SET_TEAM':
            return {
                ...state,
                teamsName: action.payload
            };
   
        case 'ADD_PLAYER':
            return {
                ...state,
                playerCount: state.playerCount + action.payload      
            };
        case 'TOGGLE_WHITELIST':
            return {
                ...state,
                isWhitelisted: !state.isWhitelisted
            };
        case 'RESET_TEAM':
            return{
                ...state,
                teamsName: '',
                playerCount: 0
            }
    default:
        return state;
}
}