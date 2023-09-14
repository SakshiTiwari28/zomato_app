import Head from '../components/Head';
import RestContainer from '../components/Container';
import { restaurants } from '../utils/mockData';
import { useState } from 'react';

const Body = () => {

    const [resList, setResList ] = useState(restaurants);

    const filter = () => {
        const filterList = resList.filter((e) => {
             return e.info.avgRating > 4;
        })
        setResList(filterList);
    }

    return (
        <div className="app">
            <Head />
            <div>
                <button className='filter-btn' onClick={filter}>Top Rated Filter</button>
            </div>
            <div className='res-container'>
                { resList.map((ele) => <RestContainer key={ele.id} resName={ele} />)}
            </div>  
        </div>
    )
}

export default Body;