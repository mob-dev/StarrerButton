/**
 * Component use to show loader over any screen by using
 * decorator {@withLoadingSpinner} at the top of the class
 * and show/hide with states.
 */

import React from 'react';
import { View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { compose, withState } from 'recompose';
const SpinnerWrapper = () => WrappedComponent => props => (
  <View style={{ flex: 1 }}>
    <Spinner visible={props.isLoading && !props.isHideSpinner} />
    <WrappedComponent {...props} />
  </View>
);
export default SpinnerWrapper;

export const withLoadingSpinner = (isLoadingInitially = false) => (
  compose(
    withState('isLoading', 'setLoading', isLoadingInitially),
    SpinnerWrapper(),
  )
);
