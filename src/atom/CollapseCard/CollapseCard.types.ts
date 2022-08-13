/**
 * CollapseCard 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.07.24 Sun 02:28:41
 */

import { DetailedHTMLProps, HTMLAttributes } from 'react';

import { WithThemeProps } from '../../common';

export type CollapseCardMode = 'extra' | 'simple'

export interface CollapseCardProps extends WithThemeProps<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>>
{
	mode?: CollapseCardMode
	isOpen?: boolean
}