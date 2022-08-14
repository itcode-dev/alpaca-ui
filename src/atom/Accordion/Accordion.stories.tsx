/**
 * Accordion Storybook 모듈
 *
 * @author RWB
 * @since 2022.06.06 Mon 17:45:58
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React, { useContext, useEffect } from 'react';

import { AccordionProps } from './Accordion.types';

import { AlpacaContext } from '../../common';
import styles from '../../stories.module.scss';

import Accordion from '.';

export default {
	component: Accordion,
	title: 'Atom/Accordion'
} as ComponentMeta<typeof Accordion>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {AccordionProps} param0: AccordionProps 객체
 *
 * @returns {ComponentStory<typeof Accordion>} ComponentStory 객체
 */
function getTemplate({ theme, ...args }: Omit<AccordionProps, 'children'>): ComponentStory<typeof Accordion>
{
	const { setTheme } = useContext(AlpacaContext);

	useEffect(() =>
	{
		// setTheme 메서드가 유효할 경우
		if (setTheme)
		{
			setTheme(theme);
		}
	}, [ theme ]);

	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<div style={{ width: '500px' }}>
					<Accordion {...args}>
						<Accordion.Header>
							테스트
						</Accordion.Header>

						<Accordion.Body style={{ padding: 20 }}>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
						</Accordion.Body>
					</Accordion>
				</div>
			</div>
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = {
	round: false,
	theme: 'light',
	transparent: false
} as Omit<AccordionProps, 'children'>;

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
				<Accordion>
					<Accordion.Header>
						<h2>Direction Left</h2>
					</Accordion.Header>

					<Accordion.Body>
						<div style={{ padding: 20 }}>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
						</div>
					</Accordion.Body>
				</Accordion>
			</div>

			<div className={cn('row')}>
				<Accordion>
					<Accordion.Header direction='right'>
						<h2>Direction Right</h2>
					</Accordion.Header>

					<Accordion.Body>
						<div style={{ padding: 20 }}>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
						</div>
					</Accordion.Body>
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
					<Accordion round>
						<Accordion.Header>
							<h2>Light Round</h2>
						</Accordion.Header>

						<Accordion.Body>
							<div style={{ padding: 20 }}>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
							</div>
						</Accordion.Body>
					</Accordion>
				</div>
			</div>

			<div className={cn('root', 'dark')}>
				<div className={cn('row')}>
					<Accordion theme='dark' round>
						<Accordion.Header>
							<h2>Dark Round</h2>
						</Accordion.Header>

						<Accordion.Body>
							<div style={{ padding: 20 }}>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
							</div>
						</Accordion.Body>
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
					<Accordion>
						<Accordion.Header>
							<h2>Light Theme</h2>
						</Accordion.Header>

						<Accordion.Body>
							<div style={{ padding: 20 }}>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
							</div>
						</Accordion.Body>
					</Accordion>
				</div>
			</div>

			<div className={cn('root', 'dark')}>
				<div className={cn('row')}>
					<Accordion theme='dark'>
						<Accordion.Header>
							<h2>Dark Theme</h2>
						</Accordion.Header>

						<Accordion.Body>
							<div style={{ padding: 20 }}>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
							</div>
						</Accordion.Body>
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
					<Accordion transparent>
						<Accordion.Header>
							<h2>Light Transparent</h2>
						</Accordion.Header>

						<Accordion.Body>
							<div style={{ padding: 20 }}>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
							</div>
						</Accordion.Body>
					</Accordion>
				</div>
			</div>

			<div className={cn('root', 'dark')}>
				<div className={cn('row')}>
					<Accordion theme='dark' transparent>
						<Accordion.Header>
							<h2>Dark Transparent</h2>
						</Accordion.Header>

						<Accordion.Body>
							<div style={{ padding: 20 }}>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus quidem dolorem unde vero, odit, sint itaque quos odio nulla iure possimus blanditiis quam magnam libero natus totam asperiores cupiditate.</p>
							</div>
						</Accordion.Body>
					</Accordion>
				</div>
			</div>
		</section>
	);
}