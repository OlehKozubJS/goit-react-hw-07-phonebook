import { createSelector } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const getFilter = state => state.filter;
