import FlowerList from "../components/flowerList/FlowerList";
import MoreAbout from "../components/MoreAbout";
import Book from "../components/Book/Book";

const ShowMoreAbout = () => {
    return (
        <>
            <Book left={<MoreAbout />} right={<FlowerList />} />
        </>
    );
}

export default ShowMoreAbout;