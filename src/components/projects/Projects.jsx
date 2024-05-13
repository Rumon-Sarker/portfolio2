import { bannerImg1, project1, project2, project3 } from "../../assets";
import Title from "../Layouts/Title";
import ProjectCart from "./ProjectCart";



const Projects = () => {
    return (
        <section id="projects" className="w-full py-20  pb-20  border-b-2 border-b-black">
            <Title title="Visit My Projects and keep Your Feedback" desc="My Projects" />
            <div className="mb-12 text-xl md:w-9/12">
                <p>Every project is Fullstack project. I have developing this all project my knowlage.My experience is dainamic project developing and new tecnoligy using in the project.</p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
                <ProjectCart
                    title="Green Cooffe House"
                    img={project1}
                    used={{ freamwork: "#Reactjs", stying: "#Tailwind", backend: "#Nodejs", dataBase: "#MongoDb" }}
                    desc={"It is an coffee house.The user will select the coffee of his choice and confirm it. Payments are made online here"}

                />
                <ProjectCart
                    title="Diamond Shop"
                    img={project2}
                    used={{ freamwork: "#Reactjs", stying: "#Tailwind", backend: "#Nodejs", dataBase: "#MongoDb" }}
                    desc="This project is a online Diamond shop.Any user select to product and add to cart.Product filtaring and searching avilable in this project."
                />
                <ProjectCart
                    title="Nextjs Todo app"
                    img={project3}
                    used={{ freamwork: "#Nextjs", stying: "#Tailwind", dataBase: "#MongoDb" }}
                    desc="This is a todo application project.Users do the todo create marking and deleting in this todo.It is nextjs fullStack Project"
                />

            </div>

        </section>
    );
};

export default Projects;