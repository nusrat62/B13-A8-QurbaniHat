import LeftSide from "@/components/Details/LeftSide";
import RightSide from "@/components/Details/RightSide";
import animalsData from "@/data/animalsData.json"
import { notFound } from "next/navigation";

const AnimalDetailsPage = async ({ params }) => {

    // get targeted animal
    const { id } = await params;
    const targetedAnimal = animalsData.find(animal => id == animal.id);

    if (!targetedAnimal) {
        notFound();
    }
    return (


        <div className="my-20 p-5 flex justify-center gap-30 flex-wrap">

            {/* left side */}
            <LeftSide targetedAnimal={targetedAnimal} />

            {/* right side */}
            <div>
                <RightSide />
            </div>
        </div>

    );
};

export default AnimalDetailsPage;