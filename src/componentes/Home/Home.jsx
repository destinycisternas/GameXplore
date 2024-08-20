import React from 'react';
import GameCard from './components/GameCard/GameCard';
import { Carousel } from 'react-bootstrap';
import './styles.css';

// Imagenes DeskTop
import image1 from '../../imagenes/re4.jpg';
import image2 from '../../imagenes/crash.jpg';
import image3 from '../../imagenes/mario.jpg';
import image4 from '../../imagenes/left.jpg';
// Imagenes Mobile
import image5 from '../../imagenes/re4.mobile.jpg'
import image6 from '../../imagenes/crash.mobile.jpg'
import image7 from '../../imagenes/Oddisay.mobile.jpg'
import image8 from '../../imagenes/left-4-dead.mobile.jpg'



function Home() {
  const games = [
    {
      title: 'Resident Evil 4 Remastered',
      description: 'Zombies, Terror , Accion',
      image: image1,
    },
    {
      title: 'Crash Bandicoot',
      description: 'Aventura , Accion',
      image: image2,
    },
    {
      title: 'Mario Odyssey',
      description: 'Aventura , Mundo Abierto',
      image: image3,
    },
    {
      title: 'Left4Dead 2',
      description: 'Zombies, Terror , Disparos',
      image: image4,
    },
  ];
  
  const gamesMobiles = [
    {
      title: 'Resident Evil 4 Remastered',
      description: 'Zombies, Terror , Accion',
      image: image5,
    },
    {
      title: 'Crash Bandicoot',
      description: 'Aventura , Accion',
      image: image6,
    },
    {
      title: 'Mario Odyssey',
      description: 'Aventura , Mundo Abierto',
      image: image7,
    },
    {
      title: 'Left4Dead 2',
      description: 'Zombies, Terror , Disparos',
      image: image8,
    },
  ];

  return (
    <div className="home">

      <section id="home" className="home-carousel">
        <Carousel interval={3000} className='home-carousel-desktop'>
          {games.map((game, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={game.image}
                alt={game.title}
              />
              <Carousel.Caption>
                <h3>{game.title}</h3>
                <p>{game.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
        <Carousel interval={3000} className='home-carousel-mobile'>
          {gamesMobiles.map((game, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={game.image}
                alt={game.title}
              />
              <Carousel.Caption>
                <h3>{game.title}</h3>
                <p>{game.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </section>
      <section id="games" className="home-content">
        <div className="catalog">
          {games.map((game, index) => (
            <GameCard key={index} game={game} />
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;
