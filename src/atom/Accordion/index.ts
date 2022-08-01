/**
 * Accordion 컴포넌트 인덱스 모듈
 *
 * @author RWB
 * @since 2022.07.13 Wed 22:52:29
 */

import Accordion from './Accordion';
import AccordionBody from './AccordionBody';
import AccordionHeader from './AccordionHeader';

export default Object.assign(Accordion, {
	Body: AccordionBody,
	Header: AccordionHeader
});
export * from './Accordion.types';