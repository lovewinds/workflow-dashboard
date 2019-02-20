import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts';

class MyGraph extends Component {
  render() {
    // Data source
    const data = [
      { genre: 'Sports', sold: 275, income: 2300 },
      { genre: 'Strategy', sold: 115, income: 667 },
      { genre: 'Action', sold: 120, income: 982 },
      { genre: 'Shooter', sold: 350, income: 5271 },
      { genre: 'Other', sold: 150, income: 3710 }
    ];

    // Define metrics
    const cols = {
      sold: { alias: '판매량' },
      genre: { alias: '장르' }
    };

    return (
      <Chart width={600} height={400} data={data} scale={cols}>
        <Axis name="genre" />
        <Axis name="sold" />
        <Legend position="top" dy={-20} />
        <Tooltip />
        <Geom type="interval" position="genre*sold" color="genre" />
      </Chart>
    )
  }
}

export default MyGraph;
