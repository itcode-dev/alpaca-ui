/**
 * Input 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.07.10 Sun 01:28:14
 */

import classNames from 'classnames/bind';
import { ChangeEvent, useContext, useRef, useState } from 'react';
import { IoIosClose } from 'react-icons/io';

import styles from './Input.module.scss';
import { InputProps } from './Input.types';

import { Context } from '../../common/context';

/**
 * Input 컴포넌트 JSX 반환 메서드
 *
 * @param {InputProps} param0: InputProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function Input({ border, error, icon, theme, className, disabled, id, onChange, required, ...props }: InputProps): JSX.Element
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

	// Input 입력 시 동작 메서드
	const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
	{
		// 값이 비었을 경우
		if (setEmpty !== (e.target.value.length === 0))
		{
			setEmpty(e.target.value.length === 0);
		}

		// onChange 프로퍼티가 유효할 경우
		if (onChange)
		{
			onChange(e);
		}
	};

	return (
		<div
			className={cn('input-wrapper', border, theme || ctx?.theme || 'light', {
				disabled,
				error,
				required
			}, className)}
			{...(id && { id: `${id}-wrapper` })}
			data-component='Input'
		>
			{icon || null}

			<input disabled={disabled} id={id} ref={ref} required={required} onChange={handleChange} {...props} />

			{isEmpty || disabled ? null : (
				<button onClick={handleClick}>
					<IoIosClose />
				</button>
			)}
		</div>
	);
}