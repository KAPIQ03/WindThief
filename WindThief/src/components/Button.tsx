import type { FC } from 'react';
import './Button.css';

type ButtonProps = {
	label: string;
	type?: 'primary' | 'secondary';
	onClick?: () => void;
	className?: string;
};

const Button: FC<ButtonProps> = ({
	label,
	type = 'primary',
	onClick,
	className,
}) => {
	return (
		<button className={`btn btn-${type} ${className || ''}`} onClick={onClick}>
			<span>{label}</span>
		</button>
	);
};

export default Button;
