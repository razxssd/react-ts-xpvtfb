import * as React from 'react';
import { SyncfusionGrid } from './SyncfusionGrid/SyncfusionGrid';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store/Store';
import { HiddenGridComponent } from './HiddenGridComponent';
import { CustomGridToolbar } from './CustomGridToolbar';
import { PEOPLE_REFRESH_REQUESTED } from '../../../store/sagas/root.saga';

export const Body: React.FC = () => {
  const dispatch = useDispatch();
  const isGridVisible: boolean = useSelector(
    (state: RootState) => state.peopleState.isGridVisible
  );

  React.useEffect(() => {
    dispatch({ type: PEOPLE_REFRESH_REQUESTED });
  }, []);

  return (
    <section className="d-flex justify-content-center">
      {isGridVisible ? (
        <div className="d-flex flex-column">
          <CustomGridToolbar />
          <SyncfusionGrid />
        </div>
      ) : (
        <HiddenGridComponent />
      )}
    </section>
  );
};
