/**
 * 카테고리 컴포넌트 타입 모듈
 *
 * @author RWB
 * @since 2022.07.14 Thu 14:49:03
 */

import { AccordionProps } from '../../atom/Accordion/Accordion.types';
import { CategoryItemProps } from '../../atom/CategoryItem/CategoryItem.types';

export interface CategoryProps extends Omit<AccordionProps, 'children'>
{
	list?: CategoryItemProps[]
	useRefresh?: boolean
	onSelectCategory?: (list: CategoryItemProps[]) => void
}