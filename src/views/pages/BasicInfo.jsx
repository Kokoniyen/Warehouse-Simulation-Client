import { useState } from 'react';
import Input from '../../components/Input';
import { useInfoContext } from '../../contexts/InfoContext';

const BasicInfo = () => {
	const { basicInfo, setBasicInfo } = useInfoContext();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setBasicInfo({ ...basicInfo, [name]: value });
	};

	return (
		<div className='w-1/2'>
			<Input
				label='Warehouse Name'
				onChange={handleChange}
				value={basicInfo.warehouseName}
				name='warehouseName'
			/>
			<Input
				label='Location (ZIP)'
				onChange={handleChange}
				value={basicInfo.location}
				name='location'
			/>
			<p className='font-bold'>CONTACT</p>
			<Input
				label='Email'
				onChange={handleChange}
				value={basicInfo.email}
				name='email'
			/>
			<Input
				label='Phone'
				onChange={handleChange}
				value={basicInfo.phone}
				name='phone'
			/>
		</div>
	);
};

export default BasicInfo;
