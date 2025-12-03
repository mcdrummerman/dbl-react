import React from 'react';

interface NavbarProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
    return (<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="http://denverbicyclelobby.com">Denver Bicycle Lobby</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
                <li className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}>
                    <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); onTabChange('home'); }}>
                        Home {activeTab === 'home' && <span className="sr-only">(current)</span>}
                    </a>
                </li>
                <li className={`nav-item ${activeTab === 'johnston-failures' ? 'active' : ''}`}>
                    <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); onTabChange('johnston-failures'); }}>
                        Johnston Failures {activeTab === 'johnston-failures' && <span className="sr-only">(current)</span>}
                    </a>
                </li>
            </ul>
        </div>
    </nav>)
}

export default Navbar