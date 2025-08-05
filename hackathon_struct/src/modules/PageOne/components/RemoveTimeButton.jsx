
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllTimes, removeLastTime } from 'store/thunks/pageOne-thunk';


import 'common/styles.css'

const RemoveTimeButton = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTimes());
    }, [dispatch]);

    const [showRemoved, setShowRemoved] = useState(false);
    const lastTimeRemoved = useSelector((state) => state.pageOne?.removedTime || '')
    const remainingTimesLength = useSelector((state) => state.pageOne?.previousTimes || []).length;

    const handleRemoveLastTime = () => {
        dispatch(removeLastTime());
        setShowRemoved(true);
        dispatch(getAllTimes());
    }

    const handleNavigateHome = () => {
        navigate('/')
    };
    const handleNavigatePageTwo = () => {
        navigate('/page-two')
    };

    return (
        <div className="home-container">
            <div className='home-grid'>
                <h1 className="home-title">Remove Time (Page One)</h1>
                <div className="button-grid three-btn">
                    <div className="button-with-label">
                        <button className="action-button" onClick={handleNavigateHome}>
                            Home Page
                        </button>
                    </div>
                    <div className="button-with-label">
                        <button className="action-button" onClick={handleRemoveLastTime}>
                            Remove Last Time
                        </button>
                        <p className="button-label">Please Click to Remove a Time</p>
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
                        showRemoved && (
                            lastTimeRemoved ? (
                                <p>The time removed was: {lastTimeRemoved}, {remainingTimesLength} remaining </p>
                            ) : (
                                <p>There are no more times to remove, please add more times on the home Page</p>
                            ))
                    }
                </div>
            </div>

        </div>
    );
};


export default RemoveTimeButton;
