import React, { FC, useState } from 'react';
import './styles.scss';
import { TableRow } from '@/entities/table-row';
import { data } from '../model/mock-data';
import { Dropdown } from '@/features/dropdown';

export const Table: FC = () => {
    const [rows, setRows] = useState(data);
    const [activeRow, setActiveRow] = useState<number | null>(null);

    const handleRowClick = (index: number) => {
        setActiveRow(activeRow === index ? null : index);
    };

    const handleUpdateRow = (index: number, updatedRow: { today: number; yesterday: number; weekly?: number }) => {
        const newRows = [...rows];
        newRows[index] = { ...newRows[index], ...updatedRow };
        setRows(newRows);
    };

    return (
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Показатель</th>
                        <th>Текущий день</th>
                        <th>Вчера</th>
                        <th>Этот день недели</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <React.Fragment key={index}>
                            <TableRow
                                label={row.indicator}
                                today={row.today}
                                yesterday={row.yesterday}
                                weekly={row.week}
                                onClick={() => handleRowClick(index)}
                                onUpdate={(updatedRow) => handleUpdateRow(index, updatedRow)}
                            />
                            {activeRow === index && (
                                <Dropdown row={row} />
                            )}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
