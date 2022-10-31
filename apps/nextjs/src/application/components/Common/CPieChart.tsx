import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer } from 'recharts';

const COLORS = ['#92A737', '#004A99', '#656565', '#073763'];

export const CPieChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Legend
          iconSize={0}
          payload={data.map((item, index) => {
            return {
              id: item.name,
              type: 'square',
              color: COLORS[index % COLORS.length],
              value: `${item.value}% ${item.name}`,
            };
          })}
          wrapperStyle={{
            fontSize: '14px',
            fontWeight: 500,

            // @ts-ignore
            '@media (max-width:500px)': {
              fontSize: '12px',
            },
            '@media only screen and (max-width: 500px)': {
              fontSize: '12px',
            },
          }}
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
        <Tooltip />
        <Pie
          data={data}
          cx="80"
          cy="50%"
          labelLine={false}
          // width={'100%'}
          // label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
