/**
 * 버튼 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.06.06 Mon 17:45:00
 */

import classNames from 'classnames/bind';
import React, { useContext } from 'react';

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
export default function Button({ border = 'flat', color = 'basic', theme, className, ...props }: ButtonProps): JSX.Element
{
	const cn = classNames.bind(styles);

	const ctx = useContext(Context);

	return (
		<button className={cn('button', theme || ctx?.theme || 'light', `border-${border}`, `color-${color}`, className)} data-name='Button' {...props} />
	);
}