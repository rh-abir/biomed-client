import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SpecificCategoryDetails from './SpecificCategoryDetails';
import Container from '../../components/Shared/Container/Container';

const SpecificCategory = () => {
    const { title } = useParams();

    const [specificCategoryData, setSpecificCategoryData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/categoryjobs/?industry=${title}`)
            .then((res) => res.json())
            .then((data) => setSpecificCategoryData(data));
    }, [title]);

    return (
        <div className='py-32'>
            <Container>
                <div className="grid md:grid-cols-2 gap-5 mb-6">
                    {specificCategoryData?.map((singleData) => (
                        <SpecificCategoryDetails key={singleData._id} singleData={singleData} />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default SpecificCategory;