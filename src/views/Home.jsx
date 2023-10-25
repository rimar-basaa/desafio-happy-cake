import torta from '../assets/torta.png';

const Home = () => {

    return (
        <>
            <h1 className="title">Bienvenido a <span>Happy Cake</span></h1>
            <p>El lugar de los pasteles Felices</p>
            <img src={torta} />
        </>
    );
};

export default Home;