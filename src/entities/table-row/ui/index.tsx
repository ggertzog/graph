import React, { FC, useState } from 'react';
import './styles.scss';

interface RowProps {
  label: string;
  today: number;
  yesterday: number;
  weekly?: number;
  onClick: () => void;
  onUpdate: (updatedRow: { today: number; yesterday: number; weekly?: number }) => void;
}

export const TableRow: FC<RowProps> = ({ label, today, yesterday, weekly, onClick, onUpdate }) => {
  const [editToday, setEditToday] = useState(today);
  const [editYesterday, setEditYesterday] = useState(yesterday);
  const [editWeekly, setEditWeekly] = useState(weekly ?? 0);
  const [percent, setPercent] = useState(getPercent());

  // Функция для вычисления процентов
  function getPercent() {
    if (editYesterday === 0) return 0;
    return Number((((editToday - editYesterday) / editYesterday) * 100).toFixed(0));
  }

  const handleBlur = () => {
    onUpdate({
      today: editToday,
      yesterday: editYesterday,
      weekly: editWeekly,
    });
    setPercent(getPercent());
  };

  return (
    <tr>
      <td onClick={onClick}>
        {label}
      </td>
      <td>
        <input
          type="number"
          value={editToday}
          onChange={(e) => setEditToday(Number(e.target.value))}
          onBlur={handleBlur}
        />
      </td>
      <td className={`cell ${percent > 0 ? 'cell_theme_green' : percent < 0 ? 'cell_theme_red' : ''}`}>
        <input
          type="number"
          value={editYesterday}
          onChange={(e) => setEditYesterday(Number(e.target.value))}
          onBlur={handleBlur}
        />
        <span className={`percent ${percent >= 0 ? 'percent_theme_green' : percent < 0 ? 'percent_theme_red' : ''}`}>
          {percent}%
        </span>
      </td>
      <td>
        <input
          type="number"
          value={editWeekly}
          onChange={(e) => setEditWeekly(Number(e.target.value))}
          onBlur={handleBlur}
        />
      </td>
    </tr>
  );
};
