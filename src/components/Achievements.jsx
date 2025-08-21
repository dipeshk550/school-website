import React from 'react';
import './Achievements.css';

const achievements = [
    { title: 'Best School award', year: '2023' },
    { title: 'Top Academic Performance', year: '2022' },
    { title: 'Excellence in sports', year: '2021' },
    { title: 'Innovation in Education', year: '2021' }
];

const Achievements = () => {
    return (
        <section className='achievements' id='achievements'>
            <h2>Our Achievements</h2>
            <div className="achievements-container">
                {achievements.map((achievement, index) => (
                    <div className="achievements-card" key={index}>
                        <h3>{achievement.title}</h3>
                        <p>{achievement.year}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
