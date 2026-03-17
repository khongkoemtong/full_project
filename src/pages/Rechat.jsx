import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ErrorBar,
  Rectangle
} from 'recharts';

// 1. Manually defined sample data (No more mock generator needed)
const data = [
  { time: 1768145757834, open: 100, close: 110, high: 115, low: 95 },
  { time: 1768145817834, open: 110, close: 105, high: 112, low: 102 },
  { time: 1768145877834, open: 105, close: 120, high: 125, low: 100 },
];

// Helper functions
const barDataKey = (entry) => [Math.min(entry.close, entry.open), Math.max(entry.close, entry.open)];
const whiskerDataKey = (entry) => [Math.max(entry.close, entry.open) - entry.low, entry.high - Math.max(entry.close, entry.open)];
const timestampToMinutes = (ts) => new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

const Candlestick = (props) => {
  const { fill, x, y, width, height, payload } = props;
  const isUp = payload.close > payload.open;
  return <Rectangle {...props} fill={isUp ? '#22c55e' : '#ef4444'} />;
};

export default function Rechat() {
  return (
    <div style={{ width: '100%', height: 400 }}>
      <ResponsiveContainer>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="time" tickFormatter={timestampToMinutes} />
          <YAxis domain={['auto', 'auto']} />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <Tooltip 
             contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Bar dataKey={barDataKey} shape={<Candlestick />}>
            <ErrorBar dataKey={whiskerDataKey} width={1} strokeWidth={1} stroke="black" />
          </Bar>
          {/* ❌ RechartsDevtools was removed from here to fix the error */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}