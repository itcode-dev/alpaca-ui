/**
 * CollapseCardThumb 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.08.01 Mon 13:08:21
 */

import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface CollapseCardThumbProps extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'children'>
{
	image: string
}