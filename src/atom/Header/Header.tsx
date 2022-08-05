/**
 * Header 컴포넌트
 *
 * @author RWB
 * @since 2022.07.05 Tue 23:39:14
 */

import styles from '@alpaca/atom/Header/Header.module.scss';
import { HeaderProps } from '@alpaca/atom/Header/Header.types';
import { AlpacaContext } from '@alpaca/common';
import classNames from 'classnames/bind';
import { useContext } from 'react';

/**
 * Header 컴포넌트 JSX 반환 메서드
 *
 * @param {HeaderProps} param0: HeaderProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function Header({ transparent, theme, className, ...props }: HeaderProps): JSX.Element
{
	const cn = classNames.bind(styles);

	const { theme: ctxTheme } = useContext(AlpacaContext);

	return (
		<header className={cn('header', theme || ctxTheme || 'light', { transparent }, className)} data-component='Header' {...props} />
	);
}