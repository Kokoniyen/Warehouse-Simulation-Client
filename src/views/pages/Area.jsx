import Cuboid from '../../components/Cuboid';
import Input from '../../components/Input';
import cuboid from '../../assets/images/cuboid.jpeg';
import { useInfoContext } from '../../contexts/InfoContext';

const Area = () => {
	const { info, setInfo } = useInfoContext();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setInfo({ ...info, [name]: value });
		console.log(info)
	};

	return (
		<div className='flex w-full items-center justify-around'>
			<div>
				<div>
					<Input
						label='Length'
						unit='ft'
						value={info.length}
						name='length'
						onChange={handleChange}
						type='number'
					/>
				</div>
				<div>
					<Input
						label='Width'
						unit='ft'
						value={info.width}
						name='width'
						onChange={handleChange}
						type='number'
					/>
				</div>
				<div>
					<Input
						label='Height'
						unit='ft'
						value={info.height}
						name='height'
						onChange={handleChange}
						type='number'
					/>
				</div>
				<div>
					<Input
						label='Initial Temperature'
						value={info.initialTemp}
						name='initialTemp'
						onChange={handleChange}
						type='number'
					/>
				</div>
				<div>
					<Input
						label='Heat Conductivity of Walls'
						value={info.heatConductivity}
						name='heatConductivity'
						onChange={handleChange}
						type='number'
					/>
				</div>
				<div>
					<Input
						label='Number of Hours'
						value={info.numberOfHours}
						name='numberOfHours'
						onChange={handleChange}
						type='number'
					/>
				</div>
			</div>
			<div>
				<img src={cuboid} alt='cuboid' />
			</div>
		</div>
	);
};

export default Area;
