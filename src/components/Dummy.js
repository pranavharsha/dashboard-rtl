import React from 'react';

function DummyComponent() {
    const greeting = 'This is Dummy Content';
    return (
        <React.Fragment>
            <div className="p-3">
                <h2>{greeting}</h2>
                <div className="mt-2 pt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </React.Fragment>
    );
}
export default DummyComponent;