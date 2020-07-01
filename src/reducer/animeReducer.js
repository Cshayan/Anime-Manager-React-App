export const animeReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_ANIME':
            return {
                ...state,
                animeList: action.payload,
                    loading: false
            }
            case 'START_LOADING':
                return {
                    ...state,
                    loading: true
                }
                case 'CLEAR_LIST':
                    return {
                        ...state,
                        animeList: []
                    }
                    default:
                        return state
    }
}