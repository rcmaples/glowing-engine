import './styles.css';

import {FC, useState} from 'react';

export const NyanCat: FC = () => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const positions = ['minimal', 'left', 'middle', 'right']

    const onClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % positions.length);
    }


    return (
        <div id="nyanCatOverly" className={`overlay cat-${positions[currentIndex]}`}>
            <div className="rainbow">
                <div className="sprite"/>
            </div>
            <button aria-label={'nyan cat'} className={"button--no-display"} onClick={onClick}>
                <div className="cat">
                    <div className="tail">
                        <div className="sprite"/>
                    </div>
                    <div className="feet">
                        <div className="sprite"/>
                    </div>
                    <div className="poptart"/>
                    <div className="head"/>
                </div>
            </button>
        </div>
    );
};
