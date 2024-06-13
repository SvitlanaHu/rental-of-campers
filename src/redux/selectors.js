import { createSelector } from "@reduxjs/toolkit";
import Fuse from "fuse.js";

export const selectGetCamperList = (state) => state.camperData.campers.data;

export const selectIsLoading = (state) => state.camperData.isLoading;

export const selectShowedVans = (state) => state.camperData.showedVans;

export const selectFavoritesIDs = state => state.camperData.favoritesIDs;

export const selectCampersCount = (state) =>
  state.camperData.campers.campersCount;

export const selectFilterConditions = (state) => state.camperData.filters;

export const selectPromoImages = (state) =>
  state.camperData.campers.promoImages;

export const selectFilteredCampers = createSelector(
  [selectGetCamperList, selectFilterConditions],
  (camperList, filter) => {
    if (!filter) return camperList;

    function checkBoxFilter(data, filterKeys) {
      if (!filterKeys && !filterKeys?.length) return;
      const filteredList = data.filter((item) => {
        return filterKeys.every((key) => item.details[key] !== 0);
      });
      return filteredList ? filteredList : [];
    }
    const checkBoxFiltered = checkBoxFilter(camperList, filter.checkBox);
    const checked = checkBoxFiltered ? checkBoxFiltered : camperList;

    function locationFilter(filterLocation) {
      if (!filterLocation) return checked;
      const option = {
        shouldSort: true,
        threshold: 0.2,
        keys: ["location"],
      };
      const fuse = new Fuse(checked, option);
      const results = fuse.search(filterLocation);
      return results.length ? results.map((item) => item.item) : [];
    }
    const locationFiltered = locationFilter(filter?.location);

    function typeFilter(filterType) {
      if (!filterType) return locationFiltered;

      const option = {
        shouldSort: true,
        threshold: 0.2,
        keys: ["form"],
      };
      const fuse = new Fuse(locationFiltered, option);
      const results = fuse.search(filterType);
      return results.length ? results.map((item) => item.item) : [];
    }
    const typeFiltered = typeFilter(filter?.radio);
    return typeFiltered;
  }
);

export const selectCamperById = createSelector(
  [selectGetCamperList, (state, camperId) => camperId],
  (campers, camperId) => campers.find((camper) => camper._id === camperId)
);

