import React from 'react'; 
import classNames from 'classnames';
import $ from './BlueTitleText.module.scss';

interface BlueTitleTextProps {
    children: React.ReactNode;
    size?: 'sm' | 'md' | 'lg';
}

const BlueTitleText = ({ 
    children,
    size
}: BlueTitleTextProps) => {
    return (
        <div 
            className={classNames(
                $.blueTitleText,
                {
                    [$.sm]: size === 'sm',
                    [$.md]: size === 'md',
                    [$.lg]: size === 'lg'
                }
            )}
        >
            {children}
        </div>
    );
};

export default BlueTitleText;