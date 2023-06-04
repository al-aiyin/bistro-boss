import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '../../assets/menu/banner3.jpg'
import PopularManu from '../Home/PopularManu/PopularManu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <PopularManu></PopularManu>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <PopularManu></PopularManu>
            <Cover img={menuImg} title="Our Menu"></Cover>
            <PopularManu></PopularManu>
        </div>
    );
};

export default Menu;