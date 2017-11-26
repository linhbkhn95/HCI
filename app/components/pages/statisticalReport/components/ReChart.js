
var Recharts  =require('recharts');
import React from 'react';
const {PropTypes} = React;
const {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;
const data = [
      {name: 'HCI', uv: 4000, female: 2400, male: 2400},
      {name: 'PTPMCN', uv: 3000, female: 1398, male: 2210},
      {name: 'FunSurv', uv: 2000, female: 9800, male: 2290},
      {name: 'Project', uv: 2780, female: 3908, male: 2000},
      {name: 'Flex', uv: 1890, female: 4800, male: 2181},
      {name: 'Vndex', uv: 2390, female: 3800, male: 2500},
      {name: 'VSD', uv: 3490, female: 4300, male: 2100},
];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
          C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
          Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill}/>;
};

TriangleBar.propTypes = {
  fill: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
};

const CustomShapeBarChart = React.createClass({
	render () {
  	return (
    	<BarChart width={900} height={400} data={data}
            margin={{top: 20, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Bar dataKey="female" fill="#8884d8" shape={<TriangleBar/>} label/>
      </BarChart>
    );
  }
})

module.exports = CustomShapeBarChart;