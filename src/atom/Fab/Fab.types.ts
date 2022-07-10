/**
 * Fab 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.07.10 Sun 18:25:12
 */

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { Theme } from '../../common/context';

export interface FabProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
{
	top?: string | number | undefined
	bottom?: string | number | undefined
	left?: string | number | undefined
	right?: string | number | undefined
	theme?: Theme
}