import React from 'react';
import './AnalyticsSummary.css';

export default function AnalyticsSummary() {
    return (
        <div className="analytics-summary">
            <div className="top-cards">
                <div className="card-1">
                    <p className="title">Total Sessions</p>
                    <div className="value-with-icon">
                        <span className="value">32</span>
                    </div>
                    <p className="value">icon</p>
                </div>

                <div className="card2">
                    <p className="title">Average Rating</p>
                    <div className="value-with-icon">
                        <span className="value">4</span>
                    </div>
                    <p className="subtext">out of 5</p>
                </div>
                <div className="small-card">
                    <p className="title"> Pending Payment</p>
                    <p className="value">R580</p>
                </div>

                <div className="small-card">
                    <p className="title"> Month Earning</p>
                    <p className="value">R1200</p>
                </div>

                <button className="export-btn">Export</button>
            </div>


            {/*<div className="bottom-charts">*/}
            {/*    <div className="line-chart">*/}
            {/*        <svg width="70%" height="190">*/}
            {/*            <polyline*/}
            {/*                fill="none"*/}
            {/*                stroke="#5D5FEF"*/}
            {/*                strokeWidth="3"*/}
            {/*                points="0,130 50,110 100,80 150,50 200,70 250,60 300,65 350,85 400,40 450,60"*/}
            {/*            />*/}
            {/*            <circle cx="400" cy="40" r="12" fill="#2e2d55" />*/}
            {/*            <text x="390" y="40" fill="white" fontSize="12">95%</text>*/}
            {/*        </svg>*/}
            {/*        <div className="months">*/}
            {/*            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>*/}
            {/*            <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <div className="donut-card">*/}
            {/*        <div className="donut-chart">*/}
            {/*            <div className="ring nbt"></div>*/}
            {/*            <div className="ring math"></div>*/}
            {/*            <div className="inner-circle"></div>*/}
            {/*        </div>*/}
            {/*        <div className="donut-labels">*/}
            {/*            <p><strong>Nbt earning</strong><br />60%</p>*/}
            {/*            <p><strong>Maths Tutoring</strong><br />50%</p>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}
