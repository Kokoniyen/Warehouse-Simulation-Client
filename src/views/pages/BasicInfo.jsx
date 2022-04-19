import Input from '../../components/Input';
import { useInfoContext } from '../../contexts/InfoContext';

const BasicInfo = () => {
	return (
		<div className='w-1/2'>
			<Input label="Warehouse Name" />
			<Input label="Location (ZIP)" />
			<p className='font-bold'>CONTACT</p>
			<Input label="Email" />
			<Input label="Phone" />
		</div>
	);
};

export default BasicInfo;
