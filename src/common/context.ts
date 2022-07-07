/**
 * 컨텍스트 모듈
 *
 * @author RWB
 * @since 2022.07.04 Mon 00:44:22
 */

import { createContext } from 'react';

export type Theme = 'light' | 'dark'

export interface ContextProps
{
	theme: Theme
}

export const Context = createContext<ContextProps | undefined>(undefined);