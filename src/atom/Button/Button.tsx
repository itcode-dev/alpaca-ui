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

const cn = classNames.bind(styles);

/**
 * 버튼 JSX 반환 메서드
 *
 * @param {ButtonProps} param0: ButtonProps 객체
 *
 * @returns {JSX.Element} JSX
 */
export default function Button({ border = 'flat', color = 'basic', theme, className, ...props }: ButtonProps): JSX.Element
{
	const ctx = useContext(Context);

	return (
		<button className={cn('button', theme || ctx?.theme || 'light', `border-${border}`, `color-${color}`, className)} {...props} />
	);
}