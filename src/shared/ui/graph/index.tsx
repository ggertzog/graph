import { dataParams } from '@/widgets/table/model/mock-data';
import React, { FC } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface GraphProps {
    row: dataParams;
}

export const Graph: FC<GraphProps> = ({row}) => {
    const data = [
        { date: '04.09', value: 0 },
        { date: '05.09', value: row.fiveSeptember },
        { date: '06.09', value: row.sixSeptember },
        { date: '07.09', value: row.sevenSeptember },
        { date: '08.09', value: row.yesterday },
        { date: 'Today', value: row.today }
    ];

    return (
        <ResponsiveContainer width="80%" height={300}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis domain={['auto', 'auto']}/>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
};
