import React from "react";

import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch } from "react-redux";
import { deleteUserAccount } from "../../store/slice/user";

export const CardBackoffice = ({ id, title, image, to }) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <Card.Body className="text-center d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image} className="w-25 mx-auto mb-2" />
        <LinkContainer to={to}>
          <Button variant="primary" className="mx-auto">
            Ir
          </Button>
        </LinkContainer>
        <Button
          variant="outline-danger"
          onClick={() => {
            dispatch(deleteUserAccount(id));
          }}
        >
          Eliminar Cuenta
        </Button>
      </Card.Body>
    </Card>
  );
};

CardBackoffice.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
