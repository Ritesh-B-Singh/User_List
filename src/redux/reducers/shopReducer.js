const initialState = [
    {
        id: 0,
        firstName: "Ritesh",
        lastName: "Singh",
        age: 22,
        salary: 12000,
    },
    {
        id: 1,
        firstName: "Aniket",
        lastName: "Karangutkar",
        age: 20,
        salary: 15000,
    },
    {
        id: 2,
        firstName: "Anoj",
        lastName: "Dubey",
        age: 22,
        salary: 15000,
    },
    {
        id: 3,
        firstName: "Rohit",
        lastName: "Gupta",
        age: 21,
        salary: 3000,
    }
];

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            state = [...state, action.payload];
            return state;
        case "UPDATE_USER":
            const shopUpdate = state.filter((shop) =>
                shop.id === action.payload.id
                    ? Object.assign(shop, action.payload)
                    : shop
            );
            state = shopUpdate;
            return state;
        case "DELETE_USER":
            const userFilter = state.filter((user) =>
                user.id === action.payload ? null : user
            );
            state = userFilter;
            return state;
        default:
            return state;
    }
};
export default userReducer;