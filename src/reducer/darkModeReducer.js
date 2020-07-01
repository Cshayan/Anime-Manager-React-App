export const darkModeReducer = (state, action) => {
    switch (action.type) {
        case 'TOOGLE_DARK_MODE':
            localStorage.setItem('dark-mode', !action.payload)
            return {
                ...state,
                darkMode: !action.payload
            }
            default:
                return state;
    }
}