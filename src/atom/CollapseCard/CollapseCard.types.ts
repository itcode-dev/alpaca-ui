/**
 * CollapseCard 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.07.24 Sun 02:28:41
 */

import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { Theme } from '../../common/context';

export interface CollapseCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
{
	extra?: JSX.Element
	footer?: JSX.Element
	theme?: Theme
	thumbnail?: string
	simple?: boolean
}