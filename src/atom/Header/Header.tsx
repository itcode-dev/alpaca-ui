/**
 * 헤더 컴포넌트
 *
 * @author RWB
 * @since 2022.07.05 Tue 23:39:14
 */

import classNames from 'classnames/bind';
import { useContext } from 'react';

import styles from './Header.module.scss';
import { HeaderProps } from './Header.types';

import { Context } from '../../common/context';

export default function Header({ transparent, theme, className, ...props }: HeaderProps): JSX.Element
{
	const cn = classNames.bind(styles);

	const ctx = useContext(Context);

	return (
		<header className={cn('header', theme || ctx?.theme || 'light', { transparent }, className)} {...props} />
	);
}