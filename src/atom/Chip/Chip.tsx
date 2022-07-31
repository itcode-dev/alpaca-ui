/**
 * Chip 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.07.21 Thu 00:47:09
 */

import classNames from 'classnames/bind';
import { useContext } from 'react';

import styles from './Chip.module.scss';
import { ChipProps } from './Chip.types';

import { Context } from '../../common/context';

/**
 * Chip 컴포넌트 JSX 반환 메서드
 *
 * @param {ChipProps} param0: ChipProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function Chip({ theme, className, ...props }: ChipProps): JSX.Element
{
	const cn = classNames.bind(styles);
	const ctx = useContext(Context);

	return (
		<div className={cn('chip', theme || ctx?.theme || 'light', className)} data-component='Chip' {...props} />
	);
}