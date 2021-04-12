export const ROUTES = {
  home: "/",
  testsPage: "/tests-page",
  login: "/login",
  signup: "/signup",
  newNote: "/notes/new",
  singleNote: "/notes/:id",
  noteById: (noteId) => `/notes/${noteId}`,
  settings: "/settings",
};
