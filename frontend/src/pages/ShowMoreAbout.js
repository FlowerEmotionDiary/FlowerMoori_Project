import FlowerList from "../components/FlowerList";
import MoreAbout from "../components/MoreAbout";
import Book from "../components/book/Book";

const ShowMoreAbout = () => {
    return (
    <>
    <Book left={<MoreAbout />} right={<FlowerList />} />
    </>
    );
}

export default ShowMoreAbout;