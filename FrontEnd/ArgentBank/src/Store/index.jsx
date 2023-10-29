import { configureStore } from '@reduxjs/toolkit'
import userConnect from './reducers/userlogin.jsx'
import userAccount from './reducers/useraccount.jsx'
import profilUpdate from './reducers/profilupdate.jsx'
const store = configureStore({
    reducer: {
        user: userConnect,
        userAccount: userAccount,
        userUpdate : profilUpdate,
    }

})

export default store;