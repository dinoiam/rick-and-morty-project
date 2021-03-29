/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllCharacters
// ====================================================

export interface AllCharacters_characters_results_origin_residents {
  __typename: 'Character';
  /**
   * The id of the character.
   */
  id: string | null;
  /**
   * The name of the character.
   */
  name: string | null;
}

export interface AllCharacters_characters_results_origin {
  __typename: 'Location';
  /**
   * The name of the location.
   */
  name: string | null;
  /**
   * The dimension in which the location is located.
   */
  dimension: string | null;
  /**
   * List of characters who have been last seen in the location.
   */
  residents: (AllCharacters_characters_results_origin_residents | null)[] | null;
}

export interface AllCharacters_characters_results_location_residents {
  __typename: 'Character';
  /**
   * The id of the character.
   */
  id: string | null;
  /**
   * The name of the character.
   */
  name: string | null;
}

export interface AllCharacters_characters_results_location {
  __typename: 'Location';
  /**
   * The name of the location.
   */
  name: string | null;
  /**
   * The dimension in which the location is located.
   */
  dimension: string | null;
  /**
   * List of characters who have been last seen in the location.
   */
  residents: (AllCharacters_characters_results_location_residents | null)[] | null;
}

export interface AllCharacters_characters_results_episode {
  __typename: 'Episode';
  /**
   * The id of the episode.
   */
  id: string | null;
  /**
   * The name of the episode.
   */
  name: string | null;
}

export interface AllCharacters_characters_results {
  __typename: 'Character';
  /**
   * The id of the character.
   */
  id: string | null;
  /**
   * The name of the character.
   */
  name: string | null;
  /**
   * The status of the character ('Alive', 'Dead' or 'unknown').
   */
  status: string | null;
  /**
   * The species of the character.
   */
  species: string | null;
  /**
   * The type or subspecies of the character.
   */
  type: string | null;
  /**
   * The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
   */
  gender: string | null;
  /**
   * The character's origin location
   */
  origin: AllCharacters_characters_results_origin | null;
  /**
   * The character's last known location
   */
  location: AllCharacters_characters_results_location | null;
  /**
   * Link to the character's image.
   * All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
   */
  image: string | null;
  /**
   * Episodes in which this character appeared.
   */
  episode: (AllCharacters_characters_results_episode | null)[] | null;
}

export interface AllCharacters_characters_info {
  __typename: 'Info';
  /**
   * Number of the next page (if it exists)
   */
  next: number | null;
}

export interface AllCharacters_characters {
  __typename: 'Characters';
  results: (AllCharacters_characters_results | null)[] | null;
  info: AllCharacters_characters_info | null;
}

export interface AllCharacters {
  /**
   * Get the list of all characters
   */
  characters: AllCharacters_characters | null;
}

export interface AllCharactersVariables {
  page: number;
}
