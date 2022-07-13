/**
 * Accordion 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.07.13 Wed 17:35:17
 */

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { Theme } from '../../common/context';

export type AccordionDirection = 'left' | 'right'

export interface AccordionProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
{
	title?: string | HTMLElement | null
	open?: boolean
	direction?: AccordionDirection
	transparent?: boolean
	round?: boolean
	theme?: Theme
}