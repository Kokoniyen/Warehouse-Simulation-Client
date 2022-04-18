import Cuboid from '../../components/Cuboid';
import Input from '../../components/Input';
import cuboid from '../../assets/images/cuboid.jpeg';

const Area = () => {
	return (
		<div className='flex w-full items-center justify-around'>
			<div>
				<div>
					<Input label='Length' unit='ft' required type='number' />
				</div>
				<div>
					<Input label='Width' unit='ft' required type='number' />
				</div>
				<div>
					<Input label='Height' unit='ft' required type='number' />
				</div>
				<div>
					<Input label='Initial Temperature' required type='number' />
				</div>
				<div>
					<Input label='Heat Conductivity of Walls' required type='number' />
				</div>
				<div>
					<Input label='Number of Hours' required type='number' />
				</div>
			</div>
			<div>
				<img src={cuboid} alt='cuboid' />
			</div>
		</div>
	);
};

export default Area;
