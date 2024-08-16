import React, { ReactNode } from 'react';

type ListProps = {
    className?: string
    data: any[];
    renderItem: (item: any, index: number) => ReactNode;
}

const List = ({ data, className, renderItem, ...restProps }: ListProps) => {
    return (
        <div className={className} {...restProps}>
            {data.map((item, index) => renderItem(item, index))}
        </div>
    );
};

export { List }