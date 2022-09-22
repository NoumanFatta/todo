import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
      ui: uiSlice,
      auth: authSlice,
      presentations: presentationsSlice,
      editor: editorSlice,
      assets: assetsSlice,
      user: usersSlice,
      comments: commentsSlice,
      reviews: reviewsSlice,
      roles: rolesSlice,
      salesforce: salesforceSlice,
      emails: emailsSlice,
      sharing: sharingSlice,
    },
  });
  
  export default store;