/**
 * 버튼 Storybook 모듈
 *
 * @author RWB
 * @since 2022.06.06 Mon 17:45:58
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React from 'react';

import Accordion from './Accordion';
import { AccordionProps } from './Accordion.types';

import styles from '../../stories.module.scss';

export default {
	component: Accordion,
	title: 'Atom/Accordion'
} as ComponentMeta<typeof Accordion>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {AccordionProps} args: AccordionProps 객체
 *
 * @returns {ComponentStory<typeof Accordion>} ComponentStory 객체
 */
function getTemplate(args: AccordionProps): ComponentStory<typeof Accordion>
{
	return (
		<section className={cn('root', args.theme)}>
			<div className={cn('row')}>
				<div style={{ width: '500px' }}>
					<Accordion {...args} />
				</div>
			</div>
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = {
	children: (
		<div>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
		</div>
	),
	round: false,
	theme: 'light',
	title: <h3>카테고리</h3>
} as AccordionProps;