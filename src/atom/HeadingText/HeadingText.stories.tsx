/**
 * HeadingText Storybook 모듈
 *
 * @author RWB
 * @since 2022.08.18 Thu 00:39:13
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React from 'react';

import { HeadingTextProps } from './HeadingText.types';

import styles from '../../stories.module.scss';

import HeadingText from '.';

export default {
	component: HeadingText,
	title: 'Atom/HeadingText'
} as ComponentMeta<typeof HeadingText>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {HeadingTextProps} param0: HeadingTextProps 인터페이스
 *
 * @returns {ComponentStory<typeof HeadingText>} ComponentStory 객체
 */
function getTemplate({ ...props }: HeadingTextProps): ComponentStory<typeof HeadingText>
{
	return (
		<section className={cn('root')}>
			<HeadingText {...props} />
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = {
	children: 'Heading Test',
	level: 'h1'
} as HeadingTextProps;

export function Level(): JSX.Element
{
	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<HeadingText level='h1'>Level1 - h1 (Default)</HeadingText>
			</div>

			<div className={cn('row')}>
				<HeadingText level='h2'>Level2 - h2</HeadingText>
			</div>

			<div className={cn('row')}>
				<HeadingText level='h3'>Level3 - h3</HeadingText>
			</div>

			<div className={cn('row')}>
				<HeadingText level='h4'>Level4 - h4</HeadingText>
			</div>

			<div className={cn('row')}>
				<HeadingText level='h5'>Level5 - h5</HeadingText>
			</div>

			<div className={cn('row')}>
				<HeadingText level='h6'>Level6 - h6</HeadingText>
			</div>
		</section>
	);
}