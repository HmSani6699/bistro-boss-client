
const ManuCover = ({coberImg,title,description}) => {
    return (
        <section>
            <div className="hero h-[600px] mb-20 max-w-6xl mx-auto" style={{ backgroundImage: `url(${coberImg})` }}>
                <div className="hero-content text-center  text-neutral-content  bg-[#00000080] w-4/6">
                    <div className="max-w-md text-white py-6">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5 ">{description}</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ManuCover;