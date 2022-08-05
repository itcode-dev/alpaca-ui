/**
 * CollapseCard 컴포넌트 인덱스 모듈
 *
 * @author RWB
 * @since 2022.07.24 Sun 04:32:51
 */

import CollapseCard from '@alpaca/atom/CollapseCard/CollapseCard';
import CollapseCardBody from '@alpaca/atom/CollapseCard/CollapseCardBody';
import CollapseCardExtra from '@alpaca/atom/CollapseCard/CollapseCardExtra';
import CollapseCardFooter from '@alpaca/atom/CollapseCard/CollapseCardFooter';
import CollapseCardThumb from '@alpaca/atom/CollapseCard/CollapseCardThumb';

export default Object.assign(CollapseCard, {
	Body: CollapseCardBody,
	Extra: CollapseCardExtra,
	Footer: CollapseCardFooter,
	Thumb: CollapseCardThumb
});

export * from '@alpaca/atom/CollapseCard/CollapseCard.types';
export * from '@alpaca/atom/CollapseCard/CollapseCardBody.types';
export * from '@alpaca/atom/CollapseCard/CollapseCardExtra.types';
export * from '@alpaca/atom/CollapseCard/CollapseCardFooter.types';
export * from '@alpaca/atom/CollapseCard/CollapseCardThumb.types';