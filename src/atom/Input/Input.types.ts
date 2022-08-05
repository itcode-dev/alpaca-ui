/**
 * Input 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.07.10 Sun 01:29:46
 */

import { Theme } from '@alpaca/common';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

export type InputBorder = 'flat' | 'round' | 'circle'

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
{
	border?: InputBorder
	error?: boolean
	icon?: IconType
	theme?: Theme
}