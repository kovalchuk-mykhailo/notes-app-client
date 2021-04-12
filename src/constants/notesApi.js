export const NOTES_API = {
  name: "notes",
  shopApi: "shop-api",
  routes: {
    allNotes: "/notes",
    reviewsOfUser: "/reviews/user",
    singleNote: (noteId) => `/notes/${noteId}`,
    invalidPath: "/invalid_path",
  },
};

export const SHOP_API = {
  name: "shop-api",
  routes: {
    reviewsOfUser: "/reviews/user",
  },
};
