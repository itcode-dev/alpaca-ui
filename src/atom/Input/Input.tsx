/**
 * Input 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.07.10 Sun 01:28:14
 */

import classNames from 'classnames/bind';
import { ChangeEvent, MouseEvent, useContext, useEffect, useRef, useState } from 'react';
import { IoIosClose } from 'react-icons/io';

import styles from './Input.module.scss';
import { InputProps } from './Input.types';

import { Context } from '../../common/context';

export default function Input({ border, icon, theme, className, id, onChange, ...props }: InputProps): JSX.Element
{
	const cn = classNames.bind(styles);

	const ctx = useContext(Context);
	const ref = useRef<HTMLInputElement | null>(null);

	const [ isEmpty, setEmpty ] = useState(true);

	// 버튼 클릭 시 input 값 제거 이벤트
	const handleClick = () =>
	{
		// 태그가 유효할 경우
		if (ref.current)
		{
			ref.current.value = '';
			ref.current.focus();

			setEmpty(true);
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
	{
		if (setEmpty !== (e.target.value.length === 0))
		{
			setEmpty(e.target.value.length === 0);
			console.dir(234);
		}

		if (onChange)
		{
			onChange(e);
		}
	};

	return (
		<div className={cn('input', border, theme || ctx?.theme || 'light', className)} id={`${id}-wrapper`}>
			{icon || null}

			<input id={id} ref={ref} onChange={handleChange} {...props} />

			{isEmpty ? null : (
				<button onClick={handleClick}>
					<IoIosClose />
				</button>
			)}
		</div>
	);
}