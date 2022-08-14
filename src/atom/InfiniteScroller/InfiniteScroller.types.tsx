/**
 * InfiniteScroller 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.08.11 Thu 22:58:45
 */

import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface InfiniteScrollerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
{
	count?: number
	total: number
	scrollOffset?: number
	onEndScroll?: (next: number) => void
}