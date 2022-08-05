/**
 * Accordion 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.07.13 Wed 17:35:17
 */

import { Theme } from '@alpaca/common';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface AccordionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
{
	open?: boolean
	transparent?: boolean
	round?: boolean
	theme?: Theme
}