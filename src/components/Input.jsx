const Input = ({ label, type = 'text', name, unit, ...otherProps }) => {
	return (
		<div className='mb-5'>
			<label className='text-sm' htmlFor={name}>
				{label}
			</label>
			<div className='relative'>
				<input
					className='border w-full focus:border-transparent focus:border-b-[#EBEBEB] focus:ring-0 mt-1 py-1 px-2 text-sm placeholder-[#82869A80] inline'
					type={type}
					name={name}
					id={name}
					{...otherProps}
				/>
				{unit && (
					<span className='absolute top-[50%] right-[-15px] translate-y-[-50%]'>
						{unit}
					</span>
				)}
			</div>
		</div>
	);
};

export default Input;
