import './styles.css';
import Navbar from '../../components/Navbar';
import Car from '../../assets/images/car-header.png'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="home-content-container">
                <div className="top-container">
                    <div className="body-color body-bg">
                        <h1>O carro perfeito para você</h1>
                        <p>Conheça nossos carros e dê mais um passo na realização do seu sonho</p>
                    </div>
                    <img src={Car} alt="Imagem do Carro" />
                </div>
                <div className='bottom-container bg-gray'>
                    <div>
                        <button className='btn btn-color'>
                            <h6>VER CATÁLOGO</h6>
                        </button>
                        <p>Comece agora a navegar</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;