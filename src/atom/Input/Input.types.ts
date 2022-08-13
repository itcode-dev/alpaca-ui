/**
 * Input 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.07.10 Sun 01:29:46
 */

import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { IconType } from 'react-icons';

import { WithThemeProps } from '../../common';
import { ButtonBaseProps } from '../Button';

export interface InputProps extends ButtonBaseProps, WithThemeProps<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>
{
	error?: boolean
	icon?: IconType
}