import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faArrowDown, faArrowUp);

interface TableHeaderSortableProps {
    caption: string;
    isAscending: boolean;
    isActive: boolean;
    onClick: (e: React.MouseEvent<HTMLElement>) => void
};

const TableHeaderSortable = ({ caption, isAscending, isActive, onClick }: TableHeaderSortableProps) => (
    <th onClick={onClick}>
        {caption} {isActive ? (<FontAwesomeIcon icon={isAscending ? "arrow-up" : "arrow-down"} />) : null}
    </th>
);

export default TableHeaderSortable;