/**
 * Sidebar 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.07.08 Fri 01:23:03
 */

import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';

import styles from './Sidebar.module.scss';
import { SidebarProps } from './Sidebar.types';

import { Context } from '../../common/context';

/**
 * Sidebar 컴포넌트 JSX 반환 메서드
 *
 * @param {SidebarProps} param0: SidebarProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function Sidebar({ dimmer, direction = 'right', open, size = 'normal', theme, children, className, id, ...props }: SidebarProps): JSX.Element
{
	const cn = classNames.bind(styles);

	const ctx = useContext(Context);

	const [ isOpen, setOpen ] = useState(open);

	useEffect(() => setOpen(open), [ open ]);

	const handleWrapperClick = () =>
	{
		// 사이드바가 열려있을 경우
		if (isOpen)
		{
			setOpen(false);
		}
	};

	return (
		<aside {...(id && { id: `${id}-wrapper` })} data-component='Sidebar'>
			<div className={cn('sidebar', direction, { close: !isOpen, open: isOpen }, size, theme || ctx?.theme || 'light', className)} id={id} {...props}>
				{children}
			</div>

			<div
				className={cn('sidebar-dimmer', {
					close: !isOpen,
					dimmer,
					open: isOpen
				})}
				onClick={handleWrapperClick}
			/>
		</aside>
	);
}