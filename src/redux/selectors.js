import { createSelector } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;
