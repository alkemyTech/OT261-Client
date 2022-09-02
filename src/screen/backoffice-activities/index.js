import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Button, Container, Nav, Stack, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import {
  StyledContainer,
  ButtonItem,
  TitleGroup,
  ActivitiyTitle,
} from "./styles";
import {
  deleteActivityAsync,
  setActivityToEdit,
  removeActivityToEdit,
} from "../../store/slice/activities";
import { ModalEditActivity } from "../../Components/ModalEditActivity/ModalEditActivity";
import ActivitiesModal from "../../Components/Activities/activitiesModal/ActivitiesModal";
import ActivitiesForm from "../../Components/Activities/ActivitiesForm";

export const BackofficeActivities = () => {
  const { activities, activityToEdit } = useSelector(
    (state) => state.activities
  );
  console.log(activities);

  const dispatch = useDispatch();

  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  //hadleing modal state
  const closeModal = () => {
    openCreateModal ? setOpenCreateModal(false) : setOpenEditModal(false);
  };
  /*   const handleClose = () => {
    dispatch(removeActivityToEdit());
    setOpenEditModal(false);
  };
 */
  const handleEditClick = (id) => {
    setOpenEditModal(true);

    const activityToEdit = activities.find((activity) => activity.id === id);
    dispatch(setActivityToEdit(activityToEdit));
    // console.log(activityToEdit);
  };
  console.log(openEditModal);
  const handleDeleteClick = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      text: "Esta acción no es reversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteActivityAsync(id));
      }
    });
  };

  return (
    <>
      <StyledContainer className="pt-4">
        <Stack as="main">
          <Container>
            <Nav>
              <Nav.Item>
                <LinkContainer to="/backoffice">
                  <Nav.Link>Regresar</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            </Nav>
            <TitleGroup>
              <ActivitiyTitle ActivitiyTitle>
                Lista de actividades
              </ActivitiyTitle>
              <ButtonItem onClick={() => setOpenCreateModal(true)}>
                Crear Actividad
              </ButtonItem>
            </TitleGroup>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th className="text-center">#</th>
                  <th className="text-center">Titulo</th>
                  <th className="text-center">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity) => (
                  <tr key={activity.id}>
                    <td className="text-center">{activity.id}</td>
                    <td className="text-center">{activity.name}</td>
                    <td className="text-center d-flex justify-content-center gap-2 ">
                      <Button
                        variant="warning"
                        size="sm"
                        onClick={() => handleEditClick(activity.id)}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeleteClick(activity.id)}
                      >
                        Eliminar
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        </Stack>
      </StyledContainer>
      {openCreateModal && (
        <ActivitiesForm
          openCreateModal={openCreateModal}
          onClose={closeModal}
        />
      )}
      {activityToEdit && (
        <ModalEditActivity openEditModal={openEditModal} onClose={closeModal} />
      )}
    </>
  );
};
