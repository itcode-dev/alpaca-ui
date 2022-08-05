/**
 * Category 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.07.14 Thu 14:49:03
 */

import { AccordionProps } from '@alpaca/atom/Accordion';
import { CategoryItemProps } from '@alpaca/atom/CategoryItem';

export interface CategoryProps extends Omit<AccordionProps, 'children'>
{
	column: number
	list?: CategoryItemProps[]
	useRefresh?: boolean
	refreshImageUrl?: string
	onSelectCategory?: (list: CategoryItemProps[]) => void
	onRefreshCategory?: (list: CategoryItemProps[]) => void
}