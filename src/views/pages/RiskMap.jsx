import { useEffect, useState } from 'react';
import { useLocationGridContext } from '../../contexts/LocationGridContext';

const RiskMap = () => {
	const { selected } = useLocationGridContext();
	const [loading, setLoading] = useState(false);
	const [result, setResult] = useState(null);

	const data = {
		heat_conductivity: 2,
		initial_temperature: 2,
		length: 2,
		breadth: 2,
		height: 2,
		number_of_hours: 2,
	};

	const fetchData = async () => {
		setLoading(true);
		try {
			const response = await fetch('http://localhost:5000/api/v1/img_path', {
				method: 'POST',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});
			const res = await response.json();
			setResult(res);
			console.log(res);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		// fetchData();
	}, []);

	return (
		<div>
			<div className='w-full flex justify-center'>
				<button
					onClick={() => fetchData()}
					className='rounded-md py-2 px-4 bg-[#0b6799] text-white cursor-pointer mb-5'
				>
					Generate Risk Map
				</button>
			</div>
			<div className='flex justify-between'>
				<div className='w-full'>
					<h3 className='mb-4'>Warehouse Map</h3>
					<div className='grid grid-cols-10 h-[400px]'>
						{Array(100)
							.fill(undefined)
							.map((el, i) => {
								return (
									<div
										className={`border flex items-center justify-center cursor-pointer text-sm ${
											selected[i] && `bg-[${selected[i].bgColor}] text-white`
										}`}
										key={i}
									>
										{i}
									</div>
								);
							})}
					</div>
				</div>

				{loading && (
					<div className='ml-5'>
						<h3 className='mb-4'>Risk Map</h3>
						<div className='w-[400px] h-[400px] bg-yellow-600'>
							Loading...
						</div>
					</div>
				)}

				{!loading && result && (
					<div className='ml-5'>
						<h3 className='mb-4'>Risk Map</h3>
						<div className='w-[400px] h-[400px] bg-yellow-600'>
							<img
								className='w-full h-full'
								src={`http://localhost:5000/${result.imageUrl}`}
								alt=''
							/>
						</div>
					</div>
				)}
			</div>
			<div className='w-full flex justify-center mt-5'>
				<button className='rounded-md py-2 px-4 bg-[#0b6799] text-white cursor-pointer mb-5'>
					Save & Exit
				</button>
			</div>
		</div>
	);
};

export default RiskMap;
