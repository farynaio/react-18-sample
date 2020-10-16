import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faArrowDown, faArrowUp);

interface TableHeaderSortableProps {
    caption: string;
    isDescending: boolean;
    isActive: boolean;
    onClick: (e: React.MouseEvent<HTMLElement>) => void
};

const TableHeaderSortable = ({ caption, isDescending = false, isActive = false, onClick }: TableHeaderSortableProps) => (
    <th className="table-header-sortable" onClick={onClick}>
        {caption} {isActive && <FontAwesomeIcon icon={isDescending ? "arrow-down" : "arrow-up"} />}
    </th>
);

export default TableHeaderSortable;