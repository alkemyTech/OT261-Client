import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {editNews } from '../../store/slice/news';
import { ErrorMessage } from './styled';
import { Formik,} from 'formik';
import { useDispatch, useSelector } from 'react-redux'

export const ModalEditNew = (props)  => {

const dispatch = useDispatch()
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 
  const formData = [
	{ label: 'nombre', type: 'text', value:'name'},{label:'fecha',type: 'date', value:'createdAt'},]

  const formvalidate = (valores) => {
    let errors = {};

    // Validacion nombre
    if(!valores.name){
        errors.name = 'el campo nombre no puede estar vacio'
    }
    return errors;
}


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Editar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edite la novedad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Formik      
                        initialValues={{
                        name:props.name,
                        createdAt:'',
                         id:props.id }}
                         validate={(values) => formvalidate(values)}
                        onSubmit={values => {
                         dispatch(editNews(values))
                         handleClose()
                     }}
                     >
    {(  {values, handleSubmit,handleChange,handleBlur ,errors, touched, } ) => ( 
          <Form onSubmit={handleSubmit}>
             {formData.map((data, id) => (
            <Form.Group className="mb-3">
              <Form.Label>{data.label}</Form.Label>
              <Form.Control
              	type={data.type}
               placeholder={`${data.label.toLocaleLowerCase()}`}
               value={values[data.value]}
               id={id}
               name={data.value}
               onChange={handleChange}
               onBlur={handleBlur}
              />
           {touched[data.value] && errors[data.value] && <ErrorMessage >{errors[data.value]}</ErrorMessage >}
               </Form.Group>
                 	))}
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" type="submit">
            Guardar cambios
          </Button>
          </Form>
             )}
        </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

