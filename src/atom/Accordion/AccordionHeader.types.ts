/**
 * AccordionHeader 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.07.27 Wed 22:29:16
 */

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type AccordionDirection = 'left' | 'right'

export interface AccordionHeaderProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
{
	direction?: AccordionDirection
}