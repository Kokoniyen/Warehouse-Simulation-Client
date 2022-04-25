import { useEffect, useState } from 'react';
import { useInfoContext } from '../../contexts/InfoContext';
import { useLocationGridContext } from '../../contexts/LocationGridContext';

const RiskMap = () => {
	const { selected } = useLocationGridContext();
	const {
		info: {
			length,
			width,
			height,
			initialTemp,
			heatConductivity,
			numberOfHours,
		},
	} = useInfoContext();
	const [loading, setLoading] = useState(false);
	const [result, setResult] = useState(null);
	const [disabled, setDisabled] = useState(false);

	const fields = {
		length: 'Length',
		breadth: 'Width',
		height: 'Height',
		initial_temperature: 'Initial Temperature',
		heat_conductivity: 'Heat Conductivity',
		number_of_hours: 'Number of Hours',
	};

	const data = {
		length,
		breadth: width,
		height,
		initial_temperature: initialTemp,
		heat_conductivity: heatConductivity,
		number_of_hours: numberOfHours,
	};

	const doorsLocation = Object.values(selected)
		.filter((el) => el.tab === 'doors')
		.map((el) => el.number);
	const windowsLocation = Object.values(selected)
		.filter((el) => el.tab === 'windows')
		.map((el) => el.number);
	const palletsLocation = Object.values(selected)
		.filter((el) => el.tab === 'pallets')
		.map((el) => el.number);
	const ventsLocation = Object.values(selected)
		.filter((el) => el.tab === 'vents')
		.map((el) => el.number);

	console.log(doorsLocation);
	console.log(windowsLocation);
	console.log(palletsLocation);
	console.log(ventsLocation);

	const fetchData = async () => {
		for (let key in data) {
			if (!data[key].length) {
				window.alert(`${fields[key]} is required`);
				return;
			}
		}
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
			setDisabled(true);
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
					disabled={disabled}
					onClick={() => fetchData()}
					className={`rounded-md py-2 px-4 bg-[#0b6799] text-white mb-5 ${
						disabled ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'
					}`}
				>
					Generate Risk Map
				</button>
			</div>
			<div className='flex justify-between'>
				<div className='w-full'>
					<h3 className='mb-4'>Warehouse Map</h3>
					<div className='grid grid-cols-10 h-[400px] border-[0.5px] border-black'>
						{Array(100)
							.fill(undefined)
							.map((el, i) => {
								return (
									<div
										className={`border-[0.5px] border-black flex items-center justify-center cursor-pointer text-sm ${
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
						<div className='w-[400px] h-[400px] bg-yellow-600'>Loading...</div>
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
