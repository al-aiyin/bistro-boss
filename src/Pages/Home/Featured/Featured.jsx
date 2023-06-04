import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg"
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subheading={"Check it out"} heading={"Featured Item"}></SectionTitle>
            <div className="md:flex justify-center bg-slate-500 bg-opacity-40 items-center py-8 px-16">
                <div>
                    <img src={featured}></img>
                </div>
                <div className="md:ml-10">
                    <p>March 20, 2020</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline">Order Now!!</button>
                </div>
            </div>
        </div>
        
    );
};

export default Featured;