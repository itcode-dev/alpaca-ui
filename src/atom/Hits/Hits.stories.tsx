/**
 * Hits Storybook 모듈
 *
 * @author RWB
 * @since 2022.08.13 Sat 13:42:12
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React from 'react';

import { HitsProps } from './Hits.types';

import styles from '../../stories.module.scss';

import Hits from '.';

export default {
	argTypes: {
		bgCount: { control: { type: 'color' } },
		bgTitle: { control: { type: 'color' } },
		iconColor: { control: { type: 'color' } }
	},
	component: Hits,
	title: 'Atom/Hits'
} as ComponentMeta<typeof Hits>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {HitsProps} args: HitsProps 인터페이스
 *
 * @returns {ComponentStory<typeof Hits>} ComponentStory 객체
 */
function getTemplate(args: HitsProps): ComponentStory<typeof Hits>
{
	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<Hits {...args} />
			</div>

			<div className={cn('row')}>
				<a alt='simpleicons' href='https://simpleicons.org/' rel='noreferrer' target='_blank'>Simple Icons</a>
				<p>Icon은 이 링크에서 제공하는 아이콘을 지원합니다.</p>
			</div>
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = {
	bgCount: 'dodgerblue',
	bgTitle: 'black',
	icon: 'react.svg',
	iconColor: 'deepskyblue',
	url: 'https://example.com'
} as HitsProps;