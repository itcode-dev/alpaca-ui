/**
 * Modal Storybook 모듈
 *
 * @author RWB
 * @since 2022.08.03 Wed 01:06:10
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React from 'react';

import { ModalProps } from './Modal.types';

import styles from '../../stories.module.scss';

import Modal from '.';

export default {
	component: Modal,
	title: 'Atom/Modal'
} as ComponentMeta<typeof Modal>;

const cn = classNames.bind(styles);

/**
 * 템플릿 반환 메서드
 *
 * @param {ModalProps} args: ModalProps 객체
 *
 * @returns {ComponentStory<typeof Modal>} ComponentStory 객체
 */
function getTemplate(args: ModalProps): ComponentStory<typeof Modal>
{
	return (
		<section className={cn('root', args.theme)}>
			<div className={cn('row')}>
				<Modal {...args} />
			</div>
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = {
	children: (
		<>
			<Modal.Header>
				<h2>ModalHeader</h2>
			</Modal.Header>

			<Modal.Body>ModalBody</Modal.Body>
		</>
	),
	theme: 'light'
} as ModalProps;