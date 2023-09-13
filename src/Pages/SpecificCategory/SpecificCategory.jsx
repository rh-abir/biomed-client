import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SpecificCategoryDetails from './SpecificCategoryDetails';
import Container from '../../components/Shared/Container/Container';
import SectionTitle from '../../components/Shared/SectionTitle/SectionTitle';
import TrendingSpecificCategory from './TrendingSpecificCategory';
import LatestSpecificCategory from './LatestSpecificCategory';

const SpecificCategory = () => {
    const { title } = useParams();

    const [specificCategoryData, setSpecificCategoryData] = useState([]);

    const [trendingTaskData, setTrendingTaskData] = useState([]);

    const [latestTaskData, setLatestTaskData] = useState([]);

    useEffect(() => {
        fetch(`https://biomed-server.vercel.app/categoryjobs/?industry=${title}`)
            .then((res) => res.json())
            .then((data) => setSpecificCategoryData(data));
    }, [title]);


    useEffect(() => {
        fetch("/public/TrendingTaskDataForSpecificCategory/TrendingTaskDataForSpecificCategory.json")
            .then((res) => res.json())
            .then((data) => setTrendingTaskData(data));
    }, []);

    useEffect(() => {
        fetch("/public/LatestTaskForSpecificCategory/LatestTaskForSpecificCategry.json")
            .then((res) => res.json())
            .then((data) => setLatestTaskData(data));
    }, []);

    return (
        <div className='pt-32'>
            <Container>
                <SectionTitle
                    heading="Explore Task Categories"
                    text="Discover a World of Opportunities"
                ></SectionTitle>
                <div className='flex gap-5'>
                    <div className="grid md:grid-cols-2 gap-5 mb-6 w-3/4">
                        {specificCategoryData?.map((singleData) => (
                            <SpecificCategoryDetails key={singleData._id} singleData={singleData} />
                        ))}
                    </div>
                    <div className='w-1/4'>
                        <h1 className='text-3xl font-bold mb-8'>Trending Task</h1>
                        <div className='flex flex-col gap-8'>
                            {
                                trendingTaskData.map(task => <TrendingSpecificCategory key={task._id} task={task} />)
                            }
                        </div>
                        <h1 className='text-3xl font-bold my-8'>Recent Task</h1>
                        <div className='flex flex-col gap-8'>
                            {
                                latestTaskData.map(latestData => <LatestSpecificCategory key={latestData._id} latestData={latestData} />)
                            }
                        </div>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SpecificCategory;