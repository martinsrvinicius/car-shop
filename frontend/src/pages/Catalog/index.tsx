
import './styles.css'
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import SearchBar from '../../components/SearchBar';

const Catalog = () => {
    return (
        <>
            <Navbar />
            <div className='mt-5'>
                <SearchBar />
            </div>
            <div className='mt-5 cat-prod-container'>
                <span className='mb-4'>
                    <ProductCard />
                </span>
                <span className='mb-4'>
                    <ProductCard />
                </span>
                <span className='mb-4'>
                    <ProductCard />
                </span>
                <span className='mb-4'>
                    <ProductCard />
                </span>
                <span className='mb-4'>
                    <ProductCard />
                </span>
                <span className='mb-4'>
                    <ProductCard />
                </span>
                <span className='mb-4'>
                    <ProductCard />
                </span>
            </div>
        </>
    );
};

export default Catalog;

