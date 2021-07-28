export const initialMeasureState = { navRef: null };

export const measureReducer = (state, action) => {
    switch (action.type) {
        case 'NAV_REF_ADD':
            return { ...state, navRef: action.payload };
        case 'NAV_REF_REMOVE':
            return { ...state, navRef: null };
        default:
            throw new Error();
    }
}