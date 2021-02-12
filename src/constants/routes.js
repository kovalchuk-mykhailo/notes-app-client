export const ROUTES = {
  home: "/",
  login: "/login",
  signup: "/signup",
  newNote: "/notes/new",
  singleNote: "/notes/:id",
  noteById: (noteId) => `/notes/${noteId}`,
};
