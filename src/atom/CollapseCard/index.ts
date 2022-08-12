/**
 * CollapseCard 컴포넌트 인덱스 모듈
 *
 * @author RWB
 * @since 2022.07.24 Sun 04:32:51
 */

import CollapseCard from './CollapseCard';
import CollapseCardBody from './CollapseCardBody';
import CollapseCardExtra from './CollapseCardExtra';
import CollapseCardFooter from './CollapseCardFooter';
import CollapseCardThumb from './CollapseCardThumb';

export default Object.assign(CollapseCard, {
	Body: CollapseCardBody,
	Extra: CollapseCardExtra,
	Footer: CollapseCardFooter,
	Thumb: CollapseCardThumb
});