/**
 * Stack 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.08.10 Wed 00:07:14
 */

import { CSSProperties, DetailedHTMLProps, HTMLAttributes } from 'react';

export type StackDirection = 'vertical' | 'horizontal'

export interface StackProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
{
	direction: StackDirection
	justifyContent?: CSSProperties['justifyContent']
	alignItems?: CSSProperties['alignItems']
	gap?: CSSProperties['gap']
}