import { GeneralOption } from "../models/GeneralOption.model";

// DECK TYPES
export const TRAP_DECK_TYPE: GeneralOption = {
  name: "Trap",
  value: "TRAP",
};
export const ENCOUNTER_DECK_TYPE: GeneralOption = {
  name: "Encounter",
  value: "ENCOUNTER",
};

// TRAP CARD TYPES
export const ORDER_CARD_TYPE: GeneralOption = {
  name: "Orders",
  value: "ORDERS",
};
export const ANAGRAM_CARD_TYPE: GeneralOption = {
  name: "Anagrams",
  value: "ANAGRAMS",
};
export const THINK_CARD_TYPE: GeneralOption = {
  name: "Think Together",
  value: "THINK",
};
export const TRAP_CARD_TYPES: GeneralOption[] = [
  ORDER_CARD_TYPE,
  ANAGRAM_CARD_TYPE,
  THINK_CARD_TYPE
];

// ENCOUNTER CARD TYPES
export const HUNTER_CARD_TYPE: GeneralOption = {
  name: "Hunter",
  value: "HUNTER",
};
export const GENERATOR_CARD_TYPE: GeneralOption = {
  name: "Generator",
  value: "GENERATOR",
};
export const ENCOUNTER_CARD_TYPES: GeneralOption[] = [
  HUNTER_CARD_TYPE,
  GENERATOR_CARD_TYPE
];

// ORDER CARD SUBTYPES
export const ACT_CARD_SUBTYPE: GeneralOption = {
  name: "Act",
  value: "ACT",
};
export const DRAW_CARD_SUBTYPE: GeneralOption = {
  name: "Draw",
  value: "DRAW",
};
export const IMPERSONATE_CARD_SUBTYPE: GeneralOption = {
  name: "Impersonate",
  value: "IMPERSONATE",
};
export const ORDER_CARD_SUBTYPES: GeneralOption[] = [
  ACT_CARD_SUBTYPE,
  DRAW_CARD_SUBTYPE,
  IMPERSONATE_CARD_SUBTYPE
];
