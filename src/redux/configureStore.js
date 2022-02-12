import { configureStore } from "@reduxjs/toolkit";
import PaginationReducer from "./paginationReducer";
import GetTemplatesReducer from "./getTemplates";
import searchSlice from "./filterSearch";

export default configureStore({
    reducer: {
        paginationSlice : PaginationReducer,
        getTemplate : GetTemplatesReducer,
        storeSearch: searchSlice.reducer
        // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        //     immutableCheck: { ignoredPaths: ['some.nested.path'] },
        //     serializableCheck: { ignoredPaths: ['some.nested.path'] }
        //   })
    }
})