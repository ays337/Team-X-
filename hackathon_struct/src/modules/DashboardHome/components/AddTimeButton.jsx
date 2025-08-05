import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCurrentTime } from 'store/thunks/dashboardhome-thunk';
import { getAllTimes } from 'store/thunks/dashboardhome-thunk';
import { useNavigate } from 'react-router-dom';
import 'common/styles.css'




const AddTimeButton = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTimes());
    }, [dispatch]);


    const handleNavigatePageOne = () => {
        navigate('/page-one')
    };
    const handleNavigatePageTwo = () => {
        navigate('/page-two')
    };
    const handleAddTime = () => {
        const currentTime = new Date().toLocaleTimeString();
        dispatch(addCurrentTime(currentTime));
        setShowAdd(true);
    }

    const currentTime = useSelector((state) => state.dashboardHome?.currentTime || '');
    const [showAdd, setShowAdd] = useState(false);


    return (
        <div className="home-container">
            <div className='home-grid'>
                <h1 className="home-title">Home Page</h1>
                <div className="button-grid three-btn">
                    <div className="button-with-label">
                        <button className="action-button" onClick={handleNavigatePageOne}>
                            Remove Last Time Page
                        </button>
                    </div>
                    <div className="button-with-label">
                        <button className="action-button" onClick={handleAddTime}>
                            Add Current Time
                        </button>
                        <p className="button-label"> Click to add a time</p>
                    </div>
                    <div className="button-with-label">
                        <button className="action-button" onClick={handleNavigatePageTwo}>
                            Show All Times Page
                        </button>
                    </div>
                </div>
            </div>
            <div className='results-flex'>
                <div className="results-text">
                    {
                        showAdd && (
                            currentTime ? (
                                <p>Entry {currentTime} has been added</p>
                            ) : (
                                <p>Please Click to add a time</p>
                            )
                        )
                    }
                </div>
            </div>
        </div >
    );
};

export default AddTimeButton;
