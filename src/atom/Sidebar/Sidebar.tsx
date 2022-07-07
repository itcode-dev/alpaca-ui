/**
 * 사이드바 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.07.08 Fri 01:23:03
 */

import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import { SidebarProps } from './Sidebar.types';

/**
 * 사이드바 컴포넌트 JSX 반환 메서드
 *
 * @param {SidebarProps} param0: SidebarProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function Sidebar({ direction, children, className, ...props }: SidebarProps): JSX.Element
{
	const cn = classNames.bind(styles);

	return (
		<aside className={cn('sidebar', direction, className)} {...props}>
			{children}
		</aside>
	);
}