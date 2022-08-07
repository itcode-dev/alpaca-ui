/**
 * Input 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.07.10 Sun 01:29:46
 */

import { ButtonBaseProps } from '@alpaca/atom/Button';
import { Theme } from '@alpaca/common';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

export interface InputProps extends ButtonBaseProps, DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
{
	error?: boolean
	icon?: IconType
	theme?: Theme
}