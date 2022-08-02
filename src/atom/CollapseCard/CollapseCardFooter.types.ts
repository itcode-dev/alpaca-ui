/**
 * CollapseCardFooter 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.08.01 Mon 13:22:02
 */

import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CollapseCardFooterProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
{
	extra?: boolean
}