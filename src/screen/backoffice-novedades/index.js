import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Table, Button} from 'react-bootstrap';
import { deleteNews, editNews } from "../../store/slice/news";
import { Img } from "./styled";
import Swal from 'sweetalert2'
import { ModalEditNew } from "../../Components/ModalEditNew";




export const BackofficeNews = () => {
    const dispatch = useDispatch();
    const news = useSelector((state) => state.news);
    
    const handleDelete = (id) =>{
    
        Swal.fire({
            title: 'esta seguro?',
            text: "usted esta elminando este testimonio",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si!'
          }).then((result) => {
            if(result.isConfirmed) {
                dispatch(deleteNews(id))
              }
          })
    
    }
    


return(

    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Nombre</th>
        <th>Imagen</th>
        <th>Fecha de creacion</th>
        <th className="text-center d-flex justify-content-center gap-2 ">accion</th>
      </tr>
    </thead>
    <tbody>
    {news.map((news) =>(
         <tr key={news.id}>
        <td>{news.id}</td>
        <td>{news.name}</td>
        <td><Img src={news.image}></Img></td>
        <td>{news.createdAt}</td>
        <td className="text-center d-flex justify-content-center gap-2 ">
        <ModalEditNew
         id = {news.id}
         name={news.name}
         createdAt={news.createdAt}
         />
        <Button
        variant="danger"
        size="sm"
        onClick={() => handleDelete(news.id)}
        >
        Eliminar
        </Button>
        </td>
        </tr> 
          ))}
    </tbody>
  </Table>
)
}