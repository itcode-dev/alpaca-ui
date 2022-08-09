/**
 * Sidebar 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.07.08 Fri 01:23:14
 */

import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { Theme } from '../../common';

export type SidebarDirection = 'left' | 'right'
export type SidebarSize = 'small' | 'normal' | 'large' | 'xlarge'

export interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
{
	dimmer?: boolean
	direction: SidebarDirection
	open?: boolean
	size?: SidebarSize
	theme?: Theme
}