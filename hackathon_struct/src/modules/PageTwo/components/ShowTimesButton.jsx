
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTimes } from 'store/thunks/pageTwo-thunk';
import { useNavigate } from 'react-router-dom';
import 'common/styles.css'


const ShowTimesButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getAllTimes());
    }, [dispatch]);

    const [showTimes, setShowTimes] = useState(false);

    const previousTimes = useSelector((state) => state.pageTwo?.previousTimes || []);

    const handleNavigateHome = () => {
        navigate('/')
    };

    const handleNavigatePageOne = () => {
        navigate('/page-one')
    };

    return (
        <div className="home-container">
            <div className='home-grid'>
                <h1 className="home-title">Show All Times(Page Two)</h1>
                <div className="button-grid three-btn">
                    <div className="button-with-label">
                        <button className="action-button" onClick={handleNavigateHome}>
                            Go Home
                        </button>
                    </div>
                    <div className="button-with-label">
                        <button className="action-button" onClick={() => setShowTimes(true)}>Show All Times</button>
                        <p className="button-label">Click to show all times</p>
                    </div>
                    <div className="button-with-label">
                        <button className="action-button" onClick={handleNavigatePageOne}>
                            Remove Last Time Page
                        </button>
                    </div>
                </div>
            </div>

            <div className='results-flex'>
                <div className="results-text">
                    {showTimes && (
                        previousTimes.length > 0 ? (
                            <ul>
                                {Array.isArray(previousTimes) &&
                                    previousTimes.slice().reverse().map((time, index) => (
                                        <li key={index}>{time}</li>
                                    ))}
                            </ul>
                        ) : (
                            <p>There are no times currently</p>
                        )
                    )}
                </div>
            </div>

        </div>
    );
};

export default ShowTimesButton;
