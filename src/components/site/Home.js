import { link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='main'>
            <div className='mainDiv'>
                <h1>Welcome to React Fundamentals</h1>
                <p>
                    This app is intended to be a starter app for my upcoming project and a learning sandbox. In this application, I will work through some of the basic React concepts, build out some small applications, and use this space to then build my own applications.
                </p>
                <hr />
                <h1>Important Notes</h1>
                <ul>
                    <li>Being component based, I can move on to the next module.</li>
                    <li>The styling is intentionally left bland in some spots. Just a sandbox.</li>
                    <li>At this phase, this site is not yet responsive.</li>
                    <li>I have cited the best resources <Link to='/resources'>here</Link>.</li>
                    <li>
                        <Link to='/resources'>React Resources</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};