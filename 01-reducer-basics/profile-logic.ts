interface TeamState {
    teamsName: {
        id: string;
        name: string;
    };
    playerCount: number;
    isWhitelisted: boolean;
}

type TeamAction =
    | { type: "SET_TEAM"; payload: { id: string; name: string; }}
    | { type: "ADD_PLAYER"; payload: number }
    | { type: "TOGGLE_WHITELIST" }
    | { type: "UPDATE_TEAM_DETAILS"; payload: {id: string, name: string } }
    | { type: "RESET_TEAM" };


function teamReducer(state: TeamState, action: TeamAction) : TeamState {
    switch (action.type) {
        case 'SET_TEAM':
            return {
                ...state,
                teamsName: {
                    ...state.teamsName,
                    name: action.payload.name
                }
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
        case 'UPDATE_TEAM_DETAILS':
            return {
                ...state,
                teamsName: {
                    id: action.payload.id,
                    name: action.payload.name
                },
            };
        case 'RESET_TEAM':
            return{
                ...state,
                teamsName: { ...state.teamsName, name: '' },
                playerCount: 0
            }
    default:
        return state;
}
}