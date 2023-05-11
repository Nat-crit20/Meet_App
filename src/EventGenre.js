import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]);
  const colors = ["#E91E63", "#9C27B0", "#2196F3", "#4CAF50", "#FFC107"];

  useEffect(() => {
    setData(() => getData());
  }, [events]);

  function getData() {
    const genres = ["React", "JavaScript", "Node", "jQuery", "AngularJS"];
    const data = genres.map((genre) => {
      const value = events.filter(({ summary }) =>
        summary.split(" ").includes(genre)
      ).length;
      return { name: genre, value };
    });
    return data;
  }

  return (
    <ResponsiveContainer height={400} className="pie">
      <PieChart height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          labelLine={false}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#82ca9d"
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)} %`
          }
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenre;
