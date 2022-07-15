/**
 * 버튼 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.07.11 Mon 15:03:27
 */

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { Theme } from '../../common/context';

export type ButtonBorderType = 'flat' | 'round' | 'circle'
export type ButtonColorType = 'basic' | 'primary' | 'submit' | 'warn' | 'error'

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
{
	border?: ButtonBorderType
	color?: ButtonColorType
	loading?: boolean
	theme?: Theme
}