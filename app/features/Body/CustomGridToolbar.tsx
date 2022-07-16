import * as React from 'react';
import reload from '../../../assets/icons/reload.png';
import { PEOPLE_REFRESH_REQUESTED } from '../../../store/sagas/root.saga';
import { removeOddRowsSuccess } from '../../../store/reducers/people.reducer';
import { useDispatch } from 'react-redux';

export const CustomGridToolbar: React.FC = () => {
  const dispatch = useDispatch();

  /**
   * Will remove odd rows only from redux state
   */
  const removeOddElements = () => {
    dispatch(removeOddRowsSuccess());
  };

  const refreshGrid = () => {
    dispatch({ type: PEOPLE_REFRESH_REQUESTED });
  };

  return (
    <div className="rx-custom-toolbar-grid d-flex justify-content-end">
      <div className="rx-custom-toolbar-button" onClick={removeOddElements}>
        Remove odd rows
      </div>
      <div
        className="rx-custom-toolbar-button d-flex align-items-center ml-10"
        onClick={refreshGrid}
      >
        Refresh grid
        <img src={reload} alt="reload" className="rx-icon ml-10" />
      </div>
    </div>
  );
};
