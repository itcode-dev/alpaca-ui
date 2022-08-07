/**
 * Button 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.07.11 Mon 15:03:27
 */

import { Theme } from '@alpaca/common/context';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type ButtonBorderType = 'flat' | 'round' | 'circle'
export type ButtonColorType = 'basic' | 'primary' | 'submit' | 'warn' | 'error' | 'dark'

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
{
	border?: ButtonBorderType
	color?: ButtonColorType
	loading?: boolean
	outline?: boolean
	theme?: Theme
	transparent?: boolean
}