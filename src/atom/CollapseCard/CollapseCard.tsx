/**
 * CollapseCard 컴포넌트 모듈
 *
 * @author RWB
 * @since 2022.07.24 Sun 02:16:04
 */

import classNames from 'classnames/bind';
import { useContext, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

import styles from './CollapseCard.module.scss';
import { CollapseCardProps } from './CollapseCard.types';

import { Context } from '../../common/context';

/**
 * CollapseCard 컴포넌트 JSX 반환 메서드
 *
 * @param {CollapseCardProps} param0: CollapseCardProps 인터페이스
 *
 * @returns {JSX.Element} JSX
 */
export default function CollapseCard({ extra, footer, theme, thumbnail, simple, children, ...props }: CollapseCardProps): JSX.Element
{
	const ctx = useContext(Context);
	const cn = classNames.bind(styles);

	const [ isOpen, setOpen ] = useState(false);

	return (
		<div className={cn('collapse-card', theme || ctx?.theme || 'light')} data-component='CollapseCard' {...props}>
			{thumbnail ? (
				<div className={cn('collapse-card-thumb')}>
					<img alt='thumb' src={thumbnail} />
				</div>
			) : null}

			<div className={cn('collapse-card-body')}>
				{children}
			</div>

			<div className={cn('collapse-card-footer')}>
				{footer ? (
					<div>
						{footer}
					</div>
				) : null}

				<div>
					<IoIosArrowDown className={cn({ open: isOpen })} onClick={() => setOpen(!isOpen)} />
				</div>
			</div>

			{(extra || !simple) ? (
				<div className={cn('collapse-card-extra', { open: isOpen })}>
					{extra}
				</div>
			) : null}
		</div>
	);
}