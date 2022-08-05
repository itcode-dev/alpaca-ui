/**
 * Fab 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.07.10 Sun 18:25:12
 */

import { Theme } from '@alpaca/common';
import { ButtonHTMLAttributes, CSSProperties, DetailedHTMLProps } from 'react';

export interface FabProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
{
	top?: CSSProperties['top']
	bottom?: CSSProperties['bottom']
	left?: CSSProperties['left']
	right?: CSSProperties['right']
	theme?: Theme
}