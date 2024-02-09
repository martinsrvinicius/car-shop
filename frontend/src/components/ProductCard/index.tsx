
import './styles.css'
import CarCard from '../../assets/images/car-card.png'

const ProductCard = () => {
    return (
        <div className='base-card card-card-container  bg-gray'>
            <img src={CarCard} alt="Imagem do carro" />
            <h1>Audi Supra TT</h1>
            <p><i>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error quidem reprehenderit </i> </p>
            <button type="button" className='btn btn-color'>
                <h4>COMPRAR</h4>
            </button>
        </div>
    );
}

export default ProductCard;
