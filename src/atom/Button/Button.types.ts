/**
 * Button 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.07.11 Mon 15:03:27
 */

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { WithThemeProps } from '../../common';

export type ButtonBorderType = 'flat' | 'round' | 'circle'
export type ButtonColorType = 'basic' | 'primary' | 'submit' | 'warn' | 'error' | 'dark'

export interface ButtonBaseProps
{
	border?: ButtonBorderType
	color?: ButtonColorType
	loading?: boolean
	outline?: boolean
	transparent?: boolean
}

export type ButtonProps = ButtonBaseProps & WithThemeProps<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>