import React, { FC } from 'react';
import './styles.scss';
import { Graph } from '@/shared/ui/graph';
import { dataParams } from '@/widgets/table/model/mock-data';

interface DropdownParams {
    row: dataParams;
}

export const Dropdown: FC<DropdownParams> = ({row}) => {
    return (
        <tr className="dropdown">
            <td colSpan={4}>
                <div className="dropdown-content">
                    <Graph row={row} />
                </div>
            </td>
        </tr>
    )
}