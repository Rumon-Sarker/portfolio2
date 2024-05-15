const Title = ({ title, desc }) => {
    return (
        <div className="flex flex-col gap-4 font-titleFont mb-20">
            <h2 className="uppercase font-light text-designColor text-xl tracking-wide">{title}</h2>
            <h2 className="md:text-5xl text-3xl font-bold capitalize">{desc}</h2>
        </div>
    );
};


export default Title;