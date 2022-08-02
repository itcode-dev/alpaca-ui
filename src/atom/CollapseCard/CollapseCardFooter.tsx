/**
 * CollapseCardFooter 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.08.01 Mon 13:21:11
 */

import classNames from 'classnames/bind';
import { useContext } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import styles from './CollapseCard.module.scss';
import { CollapseCardFooterProps } from './CollapseCardFooter.types';

import { CollapseCardContext } from '../../common/context';
import Button from '../Button';

/**
 * CollapseCardFooter 컴포넌트 JSX 반환 메서드
 *
 * @param {CollapseCardFooterProps} param0: CollapseCardFooterProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function CollapseCardFooter({ className, children, ...props }: CollapseCardFooterProps): JSX.Element
{
	const cn = classNames.bind(styles);

	const { value, setValue } = useContext(CollapseCardContext);

	const handleClick = () =>
	{
		// setValue 메서드가 유효할 경우
		if (setValue)
		{
			// value가 유효할 경우
			if (value)
			{
				setValue({
					...value,
					isOpen: !value.isOpen
				});
			}

			// 아닐 경우
			else
			{
				setValue({ isOpen: true });
			}
		}
	};

	return value?.mode !== 'simple' ? (
		<div className={cn('collapse-card-footer', className)} data-component='CollapseCardFooter' {...props}>
			<div className={cn('collapse-card-footer-one')}>
				{children}
			</div>

			{value?.mode === 'extra' ? (
				<div className={cn('collapse-card-footer-two')}>
					<Button border='circle' className={cn('collapse-card-button')} color='transparent' onClick={handleClick}>
						<IoIosArrowDown className={cn('collapse-card-icon', { close: !value.isOpen, open: value.isOpen })} />
					</Button>
				</div>
			) : null}
		</div>
	) : null;
}