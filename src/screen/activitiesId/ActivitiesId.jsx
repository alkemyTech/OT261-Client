import { useParams } from "react-router-dom";
import {activitiesMock} from "../../Components/Activities/ActivitiesList"
import style from './ActivitiesId.module.css'

export function ActivitiesId() {

    const { id } = useParams();
   

    const activitie = activitiesMock.filter( e => e.id == id)
    


    
    return (
        
        <div>
            {activitie.length > 0? 
            <div className={style.container}>
            <h1> {activitie[0]?.name}</h1>
            <h2 className=""> Actividad {activitie[0]?.id}</h2>
            <img className={style.img} src="https://images.pexels.com/photos/177598/pexels-photo-177598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img not found" />
            <h3>{activitie[0]?.description}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, doloribus. Neque ipsum blanditiis exercitationem recusandae et asperiores laboriosam, dicta delectus est obcaecati maxime dolor ullam nam quisquam. Expedita, commodi deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae officiis officia rem rerum accusamus inventore recusandae aut laborum labore, cupiditate quisquam autem at quaerat ducimus quo laboriosam. Doloribus, et voluptate.</p>
            </div>
            : <h1> Not found Activitie</h1>
            }
            
        </div>
    )
}
