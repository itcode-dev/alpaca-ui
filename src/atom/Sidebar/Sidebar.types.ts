/**
 * 사이드바 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.07.08 Fri 01:23:14
 */

import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { Theme } from '../../common/context';

export type SidebarDirection = 'left' | 'right'

export interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
{
	direction: SidebarDirection
	open?: boolean
	theme?: Theme
}