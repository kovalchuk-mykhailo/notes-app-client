export const NOTES_API = {
  name: "notes",
  routes: {
    allNotes: "/notes",
    singleNote: (noteId) => `/notes/${noteId}`,
  },
};
