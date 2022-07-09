/**
 * 사이드바 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.07.08 Fri 01:23:03
 */

import classNames from 'classnames/bind';
import { useContext } from 'react';

import styles from './Sidebar.module.scss';
import { SidebarProps } from './Sidebar.types';

import { Context } from '../../common/context';

/**
 * 사이드바 컴포넌트 JSX 반환 메서드
 *
 * @param {SidebarProps} param0: SidebarProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function Sidebar({ direction = 'right', open, size = 'normal', theme, children, className, ...props }: SidebarProps): JSX.Element
{
	const cn = classNames.bind(styles);

	const ctx = useContext(Context);

	let openClass;

	// open의 값이 undefined가 아닐 경우
	if (open !== undefined)
	{
		openClass = open ? 'open' : 'close';
	}

	return (
		<aside className={cn('sidebar', direction, openClass, size, theme || ctx?.theme || 'light', className)} {...props}>
			{children}
		</aside>
	);
}