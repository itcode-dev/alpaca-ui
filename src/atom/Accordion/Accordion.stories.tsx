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
		<div style={{ padding: '20px' }}>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
		</div>
	),
	direction: 'left',
	round: false,
	theme: 'light',
	title: <h3>카테고리</h3>,
	transparent: false
} as AccordionProps;

/**
 * 방향 예시 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Direction(): JSX.Element
{
	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<Accordion title='Direction Left'>
					<div style={{ padding: '20px' }}>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
					</div>
				</Accordion>
			</div>

			<div className={cn('row')}>
				<Accordion direction='right' title='Direction Right'>
					<div style={{ padding: '20px' }}>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
					</div>
				</Accordion>
			</div>
		</section>
	);
}

/**
 * 둥근 테두리 예시 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Round(): JSX.Element
{
	return (
		<section>
			<div className={cn('root')}>
				<div className={cn('row')}>
					<Accordion title='Light Round' round>
						<div style={{ padding: '20px' }}>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
						</div>
					</Accordion>
				</div>
			</div>

			<div className={cn('root', 'dark')}>
				<div className={cn('row')}>
					<Accordion theme='dark' title='Dark Round' round>
						<div style={{ padding: '20px' }}>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
						</div>
					</Accordion>
				</div>
			</div>
		</section>
	);
}

/**
 * 테마 예시 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Theme(): JSX.Element
{
	return (
		<section>
			<div className={cn('root')}>
				<div className={cn('row')}>
					<Accordion title='Light Theme'>
						<div style={{ padding: '20px' }}>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
						</div>
					</Accordion>
				</div>
			</div>

			<div className={cn('root', 'dark')}>
				<div className={cn('row')}>
					<Accordion theme='dark' title='Dark Theme'>
						<div style={{ padding: '20px' }}>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
						</div>
					</Accordion>
				</div>
			</div>
		</section>
	);
}

/**
 * 투명 예시 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Transparent(): JSX.Element
{
	return (
		<section>
			<div className={cn('root')}>
				<div className={cn('row')}>
					<Accordion title='Light Transparent' transparent>
						<div style={{ padding: '10px' }}>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
						</div>
					</Accordion>
				</div>
			</div>

			<div className={cn('root', 'dark')}>
				<div className={cn('row')}>
					<Accordion theme='dark' title='Dark Transparent' transparent>
						<div style={{ padding: '10px' }}>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
						</div>
					</Accordion>
				</div>
			</div>
		</section>
	);
}