/**
 * 컨텍스트 모듈
 *
 * @author RWB
 * @since 2022.07.04 Mon 00:44:22
 */

import { createContext, Dispatch, SetStateAction } from 'react';

import { CollapseCardMode } from '../atom/CollapseCard/CollapseCard.types';

export type Theme = 'light' | 'dark'

export interface AlpacaContextProps
{
	theme?: Theme
	setTheme?: Dispatch<SetStateAction<Theme | undefined>>
}

export interface AccordionContextProps
{
	isOpen?: boolean
	setOpen?: Dispatch<SetStateAction<boolean | undefined>>
}

export interface CollapseCardValueProps
{
	mode?: CollapseCardMode
	isOpen?: Dispatch<SetStateAction<CollapseCardMode | undefined>>
}

export interface CollapseCardContextProps
{
	value?: CollapseCardValueProps
	setValue?: Dispatch<SetStateAction<CollapseCardValueProps | undefined>>
}

export interface ModalContextProps
{
	isOpen?: boolean
	setOpen?: Dispatch<SetStateAction<boolean | undefined>>
}

export interface InfiniteScrollerContextProps
{
	count?: number
	setCount?: Dispatch<SetStateAction<number | undefined>>
}

export interface SidebarContextProps
{
	isOpen?: boolean
	setOpen?: Dispatch<SetStateAction<boolean | undefined>>
}

export const AlpacaContext = createContext<AlpacaContextProps>({});

export const AccordionContext = createContext<AccordionContextProps>({});

export const CollapseCardContext = createContext<CollapseCardContextProps>({ value: undefined });

export const ModalContext = createContext<ModalContextProps>({});

export const InfiniteScrollerContext = createContext<InfiniteScrollerContextProps>({});

export const SidebarContext = createContext<SidebarContextProps>({});