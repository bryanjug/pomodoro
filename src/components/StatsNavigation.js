import {Link} from 'react-router-dom';

const StatsNavigation = () => {
    return (
        <div className="text-center pt-4 pb-4">
            <Link to="/stats/day">
                <button type="button" className="btn btn-secondary statsNavigation statsNavigationLeft">Day</button>
            </Link>
            <Link to="/stats/week">
                <button type="button" className="btn btn-secondary statsNavigation">Week</button>
            </Link>
            <Link to="/stats/month">
                <button type="button" className="btn btn-secondary statsNavigation">Month</button>
            </Link>
            <Link to="/stats/year">
                <button type="button" className="btn btn-secondary statsNavigation statsNavigationRight">Year</button>
            </Link>
        </div>
    );
}

export default StatsNavigation;