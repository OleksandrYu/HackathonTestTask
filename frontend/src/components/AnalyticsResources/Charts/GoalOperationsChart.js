import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const GoalOperationsChart = ({ data, strokeColor, color}) => {
    return <ResponsiveContainer width="100%" height={300}>
        <RadarChart data = {data} cx = "50%" cy = "50%" outerRadius = "80%">
            <PolarGrid />
            <PolarAngleAxis dataKey="goal" />
            <PolarRadiusAxis />
            <Radar name="Spendings categories" dataKey="A" stroke={strokeColor} fill={color} fillOpacity={0.5}/>
        </RadarChart>
    </ResponsiveContainer>
}
export default GoalOperationsChart