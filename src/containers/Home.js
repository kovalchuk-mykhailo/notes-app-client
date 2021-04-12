import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "aws-amplify";
import ListGroup from "react-bootstrap/ListGroup";
import { LinkContainer } from "react-router-bootstrap";
import { BsPencilSquare } from "react-icons/bs";

import { useAppContext } from "../libs/contextLib";
import { onError } from "../libs/errorLib";
import { ROUTES } from "../constants/routes";
import { SHOP_API } from "../constants/notesApi";

import "./Home.css";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const { isAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);

  const loadNotes = () => {
    return API.get(SHOP_API.name, SHOP_API.routes.reviewsOfUser);
  };

  useEffect(() => {
    const onLoad = async () => {
      if (!isAuthenticated) {
        return;
      }

      try {
        const notes = await loadNotes();

        console.log(":::NOTES:::", notes);
        setNotes(notes);
      } catch (e) {
        onError(e);
      }

      setIsLoading(false);
    };

    onLoad();
  }, [isAuthenticated]);

  const NoteItem = ({ noteId, content, createdAt }) => {
    return (
      <LinkContainer to={ROUTES.noteById(noteId)}>
        <ListGroup.Item action>
          <span className="font-weight-bold">
            {content.trim().split("\n")[0]}
          </span>
          <br />
          <span className="text-muted">
            Created: {new Date(createdAt).toLocaleString()}
          </span>
        </ListGroup.Item>
      </LinkContainer>
    );
  };

  const renderNotesList = (notes) => {
    return (
      <>
        <LinkContainer to={ROUTES.newNote}>
          <ListGroup.Item action className="py-3 text-nowrap text-truncate">
            <BsPencilSquare size={17} />
            <span className="ml-2 font-weight-bold">Create a new note</span>
          </ListGroup.Item>
        </LinkContainer>
        {notes.map((note) => (
          <NoteItem key={note.noteId} {...note} />
        ))}
      </>
    );
  };

  const renderLander = () => {
    return (
      <div className="lander">
        <h1>Scratch</h1>
        <p className="text-muted">A simple note taking app</p>
        <div className="pt-3">
          <Link to="/login" className="btn btn-info btn-lg mr-3">
            Login
          </Link>
          <Link to="/signup" className="btn btn-success btn-lg">
            Signup
          </Link>
        </div>
      </div>
    );
  };

  const renderNotes = () => {
    return (
      <div className="notes">
        <h2 className="pb-3 mt-4 mb-3 border-bottom">Your Notes</h2>
        <ListGroup>{!isLoading && renderNotesList(notes)}</ListGroup>
      </div>
    );
  };

  return (
    <div className="Home">
      {isAuthenticated ? renderNotes() : renderLander()}
    </div>
  );
}
