/**
 * Accordion 컴포넌트 인덱스 모듈
 *
 * @author RWB
 * @since 2022.07.13 Wed 22:52:29
 */

import Accordion from '@alpaca/atom/Accordion/Accordion';
import AccordionBody from '@alpaca/atom/Accordion/AccordionBody';
import AccordionHeader from '@alpaca/atom/Accordion/AccordionHeader';

export default Object.assign(Accordion, {
	Body: AccordionBody,
	Header: AccordionHeader
});

export * from '@alpaca/atom/Accordion/Accordion.types';
export * from '@alpaca/atom/Accordion/AccordionBody.types';
export * from '@alpaca/atom/Accordion/AccordionHeader.types';