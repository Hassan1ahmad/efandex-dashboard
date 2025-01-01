'use client'

import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';


const TinyAreaChart = ({graphData,graphColor}) => {
  return (
    <div className='w-full h-[100px]'>
      <ResponsiveContainer>
        <AreaChart
          data={graphData}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <Area type="monotone" dataKey="uv" stroke={graphColor} fill={graphColor} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TinyAreaChart;
