/**
 * Modal Storybook 모듈
 *
 * @author RWB
 * @since 2022.08.03 Wed 01:06:10
 */

import { ComponentStory, ComponentMeta } from '@storybook/react';
import classNames from 'classnames/bind';
import React, { useContext, useEffect } from 'react';

import { ModalProps } from './Modal.types';

import { AlpacaContext, ModalContext } from '../../common';
import styles from '../../stories.module.scss';
import Button from '../Button';

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
function getTemplate({ open, theme, ...args }: ModalProps): ComponentStory<typeof Modal>
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
		<section className={cn('root')} style={{ height: '100vh' }}>
			<div className={cn('row')}>
				<Modal.Provider value={open}>
					<ModalContext.Consumer>
						{({ setOpen }) => (
							<Modal {...args}>
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
										<Button
											border='round'
											color='submit'
											outline
											onClick={() => setOpen && setOpen(false)}
										>
											확인
										</Button>
										<Button border='round' outline onClick={() => setOpen && setOpen(false)}>닫기</Button>
									</div>
								</Modal.Footer>
							</Modal>
						)}
					</ModalContext.Consumer>
				</Modal.Provider>
			</div>
		</section>
	);
}

export const Sandbox = getTemplate.bind({});
Sandbox.args = {
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
	return (
		<Modal.Provider value={false}>
			<ModalContext.Consumer>
				{({ setOpen }) => (
					<section className={cn('root')} style={{ height: '100vh' }}>
						<div className={cn('row')}>
							<Button color='primary' onClick={() => setOpen && setOpen(true)}>모달 호출 버튼</Button>
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

						<Modal dimmed>
							<Modal.Header>
								<h2>Dimmed Modal</h2>
							</Modal.Header>

							<Modal.Body>이 모달은 Dimmer가 적용됩니다.</Modal.Body>

							<Modal.Footer>
								<div
									style={{
										display: 'flex',
										gap: 10,
										justifyContent: 'end'
									}}
								>
									<Button border='round' outline onClick={() => setOpen && setOpen(false)}>닫기</Button>
								</div>
							</Modal.Footer>
						</Modal>
					</section>
				)}
			</ModalContext.Consumer>

		</Modal.Provider>
	);
}

/**
 * 강제 모달 예시 JSX 반환 메서드
 *
 * @returns {JSX.Element} JSX
 */
export function Forced(): JSX.Element
{
	return (
		<Modal.Provider value={false}>
			<ModalContext.Consumer>
				{({ setOpen }) => (
					<section className={cn('root')} style={{ height: '100vh' }}>
						<div className={cn('row')}>
							<Button color='primary' onClick={() => setOpen && setOpen(true)}>모달 호출 버튼</Button>
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

						<Modal forced>
							<Modal.Header>
								<h2>Forced Modal</h2>
							</Modal.Header>

							<Modal.Body>이 모달은 Dimmer를 클릭해 끌 수 없으며, 반드시 제공된 버튼을 눌러야만 합니다.</Modal.Body>

							<Modal.Footer>
								<div
									style={{
										display: 'flex',
										gap: 10,
										justifyContent: 'end'
									}}
								>
									<Button border='round' outline onClick={() => setOpen && setOpen(false)}>닫기</Button>
								</div>
							</Modal.Footer>
						</Modal>
					</section>
				)}
			</ModalContext.Consumer>

		</Modal.Provider>
	);
}