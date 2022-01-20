import Categories from "../Categories/Categories";
import Header from "../Header/Header";


const Home = () => {
    return (
        <div>
            <Header/>
            <Categories items={[
                'For you',
                'Online',
                'Today',
                'This weekend',
                'Free',
                'Music',
                'Food & Drink',
                'Charity & Causes']}/>
        </div>
    );
};

export default Home;
