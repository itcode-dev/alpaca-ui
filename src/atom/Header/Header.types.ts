/**
 * Header 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.07.05 Tue 23:54:57
 */

import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { Theme } from '../../common/context';

export interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
{
	theme?: Theme
	transparent?: boolean
}