import React from 'react';
import './assets/reset.css';
import style from './BackofficeLayout.module.css';
import { icons } from './assets';

const cardList = [
  { id: 1, title: 'Novedades', image: icons.news },
  { id: 2, title: 'Actividades', image: icons.activities },
  { id: 3, title: 'Categorias', image: icons.categories },
  { id: 4, title: 'Testimonios', image: icons.testimonials },
  { id: 5, title: 'Organización', image: icons.organization },
  { id: 6, title: 'Slides', image: icons.slides },
  { id: 7, title: 'Usuarios', image: icons.users },
  { id: 8, title: 'Miembros', image: icons.members },
];

export const BackofficeLayout = () => {
  return (
    <div className={style.backoffice}>
      <header className={style.backoffice__header}>
        <nav></nav>
      </header>
      <main className={style.backoffice__main}>
        <ul className={style.backoffice__ul}>
          {cardList.map(({ title, image, id }) => (
            <li key={id} className={style.backoffice__li}>
              <h2 className={style.backoffice__h2}>{title}</h2>
              <div className={style['backoffice__image-container']}>
                <img
                  src={image}
                  alt={title}
                  className={style.backoffice__image}
                />
              </div>
              <button className={style.backoffice__button}>Ir</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};
