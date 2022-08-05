/**
 * Chip 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.07.21 Thu 00:47:09
 */

import styles from '@alpaca/atom/Chip/Chip.module.scss';
import { ChipProps } from '@alpaca/atom/Chip/Chip.types';
import { AlpacaContext } from '@alpaca/common';
import classNames from 'classnames/bind';
import { useContext } from 'react';

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
	const { theme: ctxTheme } = useContext(AlpacaContext);

	return (
		<div className={cn('chip', theme || ctxTheme || 'light', className)} data-component='Chip' {...props} />
	);
}