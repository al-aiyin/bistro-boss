import { useEffect } from "react";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { useState } from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularManu = () => {

    const [menu, setMenu] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const PopularItems = data.filter(item => item.category === 'popular')
                setMenu(PopularItems)
            })
    }, [])

    return (
        <section className=" mb-12">
            <SectionTitle
                heading={"FROM OUR MENU"}
                subheading={"Check it out"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-4">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                        ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularManu;