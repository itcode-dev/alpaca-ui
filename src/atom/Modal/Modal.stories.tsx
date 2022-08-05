/**
 * Modal Storybook 모듈
 *
 * @author RWB
 * @since 2022.08.03 Wed 01:06:10
 */

import Button from '@alpaca/atom/Button';
import Modal, { ModalProps } from '@alpaca/atom/Modal';
import styles from '@alpaca/stories.module.scss';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React, { useState } from 'react';

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
		<section className={cn('root', args.theme)} style={{ height: '100vh' }}>
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

			<Modal.Footer>
				<div style={{
					display: 'flex',
					gap: 10,
					justifyContent: 'end'
				}}
				>
					<Button border='round' color='submit' outline>확인</Button>
					<Button border='round' outline>닫기</Button>
				</div>
			</Modal.Footer>
		</>
	),
	open: true,
	theme: 'light'
} as ModalProps;

/**
 * Dimmed 예시 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Dimmed(): JSX.Element
{
	const [ isOpen, setOpen ] = useState(false);

	return (
		<section className={cn('root')} style={{ height: '100vh' }}>
			<div className={cn('row')}>
				<Button color='primary' onClick={() => setOpen(true)}>모달 호출 버튼</Button>
			</div>

			<div className={cn('row')}>
				<Button>의미없는 버튼</Button>
			</div>

			<div className={cn('row')}>
				<Button>의미없는 버튼</Button>
			</div>

			<div className={cn('row')}>
				<Button>의미없는 버튼</Button>
			</div>

			<div className={cn('row')}>
				<Button>의미없는 버튼</Button>
			</div>

			<div className={cn('row')}>
				<Button>의미없는 버튼</Button>
			</div>

			<Modal open={isOpen} dimmed>
				<Modal.Header>
					<h2>ModalHeader</h2>
				</Modal.Header>

				<Modal.Body>ModalBody</Modal.Body>

				<Modal.Footer>
					<div style={{
						display: 'flex',
						gap: 10,
						justifyContent: 'end'
					}}
					>
						<Button border='round' outline onClick={() => setOpen(false)}>닫기</Button>
					</div>
				</Modal.Footer>
			</Modal>
		</section>
	);
}

/**
 * 강제 모달 예시 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Forced(): JSX.Element
{
	const [ isOpen, setOpen ] = useState(false);

	return (
		<section className={cn('root')} style={{ height: '100vh' }}>
			<div className={cn('row')}>
				<Button color='primary' onClick={() => setOpen(true)}>모달 호출 버튼</Button>
			</div>

			<div className={cn('row')}>
				<Button>의미없는 버튼</Button>
			</div>

			<div className={cn('row')}>
				<Button>의미없는 버튼</Button>
			</div>

			<div className={cn('row')}>
				<Button>의미없는 버튼</Button>
			</div>

			<div className={cn('row')}>
				<Button>의미없는 버튼</Button>
			</div>

			<div className={cn('row')}>
				<Button>의미없는 버튼</Button>
			</div>

			<Modal open={isOpen} forced>
				<Modal.Header>
					<h2>ModalHeader</h2>
				</Modal.Header>

				<Modal.Body>ModalBody</Modal.Body>

				<Modal.Footer>
					<div style={{
						display: 'flex',
						gap: 10,
						justifyContent: 'end'
					}}
					>
						<Button border='round' outline onClick={() => setOpen(false)}>닫기</Button>
					</div>
				</Modal.Footer>
			</Modal>
		</section>
	);
}