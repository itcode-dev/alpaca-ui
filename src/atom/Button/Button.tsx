/**
 * 버튼 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.06.06 Mon 17:45:00
 */

import classNames from 'classnames/bind';
import React, { useContext } from 'react';
import { RiLoader4Fill } from 'react-icons/ri';

import styles from './Button.module.scss';
import { ButtonProps } from './Button.types';

import { Context } from '../../common/context';

/**
 * 버튼 컴포넌트 JSX 반환 메서드
 *
 * @param {ButtonProps} param0: ButtonProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function Button({ border = 'flat', color = 'basic', loading, theme, children, className, ...props }: ButtonProps): JSX.Element
{
	const cn = classNames.bind(styles);

	const ctx = useContext(Context);

	return (
		<button className={cn('button', theme || ctx?.theme || 'light', `border-${border}`, `color-${color}`, { loading }, className)} data-name='Button' {...props}>
			<div className={cn('body')}>{children}</div>
			<div className={cn('loading')}><RiLoader4Fill /></div>
		</button>
	);
}