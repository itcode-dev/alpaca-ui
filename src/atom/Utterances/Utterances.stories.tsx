/**
 * Utterances Storybook 모듈
 *
 * @author RWB
 * @since 2022.08.15 Mon 05:05:22
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React from 'react';

import { UtterancesProps } from './Utterances.types';

import styles from '../../stories.module.scss';

import Utterances from '.';

export default {
	argTypes: {
		issueTerm: { control: false },
		repo: { control: false }
	},
	component: Utterances,
	title: 'Atom/Utterances'
} as ComponentMeta<typeof Utterances>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {UtterancesProps} args: UtterancesProps 인터페이스
 *
 * @returns {ComponentStory<typeof Utterances>} ComponentStory 객체
 */
function getTemplate(args: Omit<UtterancesProps, 'repo' | 'issueTerm'>): ComponentStory<typeof Utterances>
{
	return (
		<section className={cn('root')}>
			<div className={cn('row')}>
				<Utterances {...args} issueTerm='pathname' repo='itcode-dev/alpaca-ui' style={{ width: 1000 }} />
			</div>
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = { theme: 'github-light' } as Omit<UtterancesProps, 'repo' | 'issueTerm'>;