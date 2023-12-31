import React, { FC, Fragment } from 'react';
import { ImagesData } from '../../CommonComponents/Images/CommonImages';
import loader from '../../assets/images/svgs/loader.svg';
interface LoaderProps {  }

const Loader: FC<LoaderProps> = () => {
	return (
		<Fragment>
			<div id="global-loader">
				<img src={loader} alt="loader" />
				<svg xmlns="http://www.w3.org/2000/svg"   width="80px" height="80px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<g transform="rotate(0 50 50)">
  <rect x="40" y="21.5" rx="7.2" ry="2.5" width="20" height="5" fill="#664dc9">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8571428571428571s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(51.42857142857143 50 50)">
  <rect x="40" y="21.5" rx="7.2" ry="2.5" width="20" height="5" fill="#44c4fa">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.7142857142857143s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(102.85714285714286 50 50)">
  <rect x="40" y="21.5" rx="7.2" ry="2.5" width="20" height="5" fill="#664dc9">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5714285714285714s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(154.28571428571428 50 50)">
  <rect x="40" y="21.5" rx="7.2" ry="2.5" width="20" height="5" fill="#44c4fa">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.42857142857142855s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(205.71428571428572 50 50)">
  <rect x="40" y="21.5" rx="7.2" ry="2.5" width="20" height="5" fill="#664dc9">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.2857142857142857s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(257.14285714285717 50 50)">
  <rect x="40" y="21.5" rx="7.2" ry="2.5" width="20" height="5" fill="#44c4fa">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.14285714285714285s" repeatCount="indefinite"></animate>
  </rect>
</g><g transform="rotate(308.57142857142856 50 50)">
  <rect x="40" y="21.5" rx="7.2" ry="2.5" width="20" height="5" fill="#664dc9">
    <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
  </rect>
</g>
</svg>
			</div>
		</Fragment>
	);
};
export default Loader;
