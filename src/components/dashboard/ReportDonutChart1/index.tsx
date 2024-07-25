'use client';
import { useMemo } from 'react';
import { ChartData, ChartOptions } from 'chart.js/auto';

import Chart from '@/components/dashboard/Base/Chart';
import { selectColorScheme } from '@/stores/colorSchemeSlice';
import { selectDarkMode } from '@/stores/darkModeSlice';
import { useAppSelector } from '@/stores/hooks';
import { getColor } from '@/utils/colors';

interface MainProps extends React.ComponentPropsWithoutRef<'canvas'> {
  width?: number | 'auto';
  height?: number | 'auto';
}

function Main({ width = 'auto', height = 'auto', className = '' }: MainProps) {
  const props = {
    width: width,
    height: height,
    className: className,
  };
  const colorScheme = useAppSelector(selectColorScheme);
  const darkMode = useAppSelector(selectDarkMode);

  const chartData = [15, 10, 65];
  const chartColors = () => [getColor('pending', 0.9), getColor('warning', 0.9), getColor('primary', 0.9)];
  const data: ChartData = useMemo(() => {
    return {
      labels: ['Yellow', 'Dark'],
      datasets: [
        {
          data: chartData,
          backgroundColor: colorScheme ? chartColors() : '',
          hoverBackgroundColor: colorScheme ? chartColors() : '',
          borderWidth: 2,
          borderColor: darkMode ? getColor('darkmode.700') : getColor('white'),
        },
      ],
    };
  }, [colorScheme, darkMode]);

  const options: ChartOptions = useMemo(() => {
    return {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      cutout: '83%',
    };
  }, [colorScheme, darkMode]);

  return (
    <Chart
      type='doughnut'
      width={props.width}
      height={props.height}
      data={data}
      options={options}
      className={props.className}
    />
  );
}

export default Main;
